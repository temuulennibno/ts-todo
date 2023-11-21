import express from "express";
import { createTodoController, deleteTodoController, getTodoController, getTodosController, updateTodoController } from "../controllers/todos-controller";

const router = express.Router();

router.get("/", getTodosController);
router.get("/:id", getTodoController);
router.post("/", createTodoController);
router.patch("/:id", updateTodoController);
router.delete("/:id", deleteTodoController);

export default router;
