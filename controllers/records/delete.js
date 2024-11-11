import Record from "../../models/Record.js";

export const deleteRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.json({ message: "Records deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
