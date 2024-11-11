import Record from "../../models/Record.js";

export const updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!record) {
      return res.status(404).json({ message: "Registro no encontrado" });
    }
    res.json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
