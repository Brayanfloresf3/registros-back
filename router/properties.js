import { Router } from "express";
import { createProperty } from "../controllers/properties/create.js";
import { getAllProperties, getPropertyById } from "../controllers/properties/read.js";
import { updateProperty } from "../controllers/properties/update.js";
import { deleteProperty } from "../controllers/properties/delete.js";
import validator from "../middlewares/validator.js";
import schemaPropertyCreated from "../schemas/properties/create.js";

const router = Router();

router.get("/all", getAllProperties);
router.get("/:id", getPropertyById);
router.post("/create", validator(schemaPropertyCreated), createProperty);
router.put("/update/:id", updateProperty);
router.delete("/delete/:id", deleteProperty);

export default router;
