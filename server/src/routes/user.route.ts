import * as UserController  from "../controllers/user.controller.ts";
import { Router } from "express";

const router = Router();
router.get("/:id", UserController.getUser);
router.post("/", UserController.createUser);
export default router;