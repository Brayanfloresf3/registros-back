import { Router } from "express";
import usersRouter from "./users.js";
import recordsRouter from "./records.js";
import propertiesRouter from "./properties.js";

const router = Router();

router.use("/users", usersRouter);
router.use("/records", recordsRouter);
router.use("/properties", propertiesRouter);

export default router;
