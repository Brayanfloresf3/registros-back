import Property from "../../models/Property.js";

export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find()
      .populate("user", "name email")
      .sort({ name: 1 });

    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
