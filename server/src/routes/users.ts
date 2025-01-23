import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users";

import { Router } from "express";

const router = Router();

router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:_id", getUser);
router.put("/user/:_id", updateUser);
router.delete("/user/:_id", deleteUser);

export default router;
