import { Router } from "express";
import { createRecord } from "../controllers/records/create.js";
import { getAllRecords, getRecordById } from "../controllers/records/read.js";
import { updateRecord } from "../controllers/records/update.js";
import { deleteRecord } from "../controllers/records/delete.js";

const router = Router();

router.get("/all", getAllRecords);
router.get("/:id", getRecordById);
router.post("/create", createRecord);
router.put("/update/:id", updateRecord);
router.delete("/delete/:id", deleteRecord);

export default router;
