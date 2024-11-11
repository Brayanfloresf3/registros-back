import { Router } from "express";
import { createUser } from "../controllers/users/create.js";
import { getAllUsers, getUserById } from "../controllers/users/read.js";
import { updateUser } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";

const router = Router();

router.get("/all", getAllUsers);
router.get("/:id", getUserById);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
