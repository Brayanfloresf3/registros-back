import Property from "../../models/Property.js";

export const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json({
      message: "Property deleted successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
