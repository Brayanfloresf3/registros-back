import "dotenv/config.js";
import "../../config/dataBase.js";
import Property from "../models/Property.js";

const userIds = [
  "67312968bdfe6fc2ff895cec", // Ana García
  "67312968bdfe6fc2ff895ced", // Carlos Rodríguez
  "67312968bdfe6fc2ff895cee", // María López
  "67312968bdfe6fc2ff895cef", // Juan Martínez
  "67312968bdfe6fc2ff895cf0", // Laura Sánchez
  "67312968bdfe6fc2ff895cf1", // Pedro Ramírez
  "67312968bdfe6fc2ff895cf2", // Sofia Torres
  "67312968bdfe6fc2ff895cf3", // Diego Castro
  "67312968bdfe6fc2ff895cf4", // Valentina Medina
  "67312968bdfe6fc2ff895cf5", // Andrés Herrera
];

const generateProperties = () => {
  const propertyTemplates = [
    { name: "House in the city center", type: "House", value: 250000 },
    { name: "Apartment on the beach", type: "Apartment", value: 180000 },
    { name: "Land on the outskirts", type: "Land", value: 50000 },
    { name: "Countryside house", type: "House", value: 220000 },
    { name: "Office in the shopping center", type: "Office", value: 350000 },
  ];

  const properties = [];

  userIds.forEach((userId) => {
    propertyTemplates.forEach((template) => {
      properties.push({
        ...template,
        user: userId,
      });
    });
  });

  return properties;
};

const properties = generateProperties();

Property.insertMany(properties)
  .then(() => {
    console.log("Data inserted successfully");
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  });
