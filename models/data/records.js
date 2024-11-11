import "dotenv/config.js";
import "../../config/dataBase.js";
import Record from "../Record.js"; 

const userIds = [
  "67312968bdfe6fc2ff895cec",
  "67312968bdfe6fc2ff895ced",
  "67312968bdfe6fc2ff895cee",
  "67312968bdfe6fc2ff895cef",
  "67312968bdfe6fc2ff895cf0",
  "67312968bdfe6fc2ff895cf1",
  "67312968bdfe6fc2ff895cf2",
  "67312968bdfe6fc2ff895cf3",
  "67312968bdfe6fc2ff895cf4",
  "67312968bdfe6fc2ff895cf5",
];

// Genera 20 registros para cada usuario
const generateRecords = () => {
  const records = [];
  const descriptions = [
    "Purchase of office supplies",
    "Payment for internet services",
    "Purchase of technology equipment",
    "Office rent",
    "Purchase of cleaning supplies",
    "Payment of quarterly taxes",
    "Property maintenance",
    "Payment for financial consulting",
    "Purchase of merchandise",
    "Payment for cleaning services",
  ];

  userIds.forEach((userId, userIndex) => {
    for (let i = 0; i < 20; i++) {
      const record = {
        date: new Date(2024, i % 12, (i + 1) % 28 + 1), // Genera una fecha dentro del 2024
        description: descriptions[i % descriptions.length], // Selecciona una descripción de manera cíclica
        value: Math.floor(Math.random() * 2000) + 100, // Genera un valor aleatorio entre 100 y 2100
        active: Math.random() < 0.7, // Aproximadamente 70% de los registros serán activos
        user: userId, // Asocia el ID del usuario
      };
      records.push(record);
    }
  });

  return records;
};

const records = generateRecords();

Record.insertMany(records)
  .then(() => {
    console.log("Records inserted successfully");
  })
  .catch((error) => {
    console.error("Error inserting records:", error);
  });
