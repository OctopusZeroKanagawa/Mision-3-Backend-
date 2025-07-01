import express from "express";
// import {
//   createTask,
//   getTasks,
//   updateTask,
//   deleteTask,
// } from "../controllers/taskController.js";

import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router(); // router es un mini servidor para agrupar rutas

// Endpoints CRUD
router.post("/tasks", createTask); // Crear tarea
router.get("/tasks", getTasks); // Leer tareas
router.put("/tasks/:id", updateTask); // Actualizar tarea
router.delete("/tasks/:id", deleteTask); // Eliminar tarea

export default router;
