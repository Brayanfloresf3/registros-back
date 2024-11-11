import Record from "../../models/Record.js";

export const getAllRecords = async (req, res) => {
  try {
    const records = await Record.find().populate("user", "name email");

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecordById = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
