import express from "express";

import {
  createVideojuego,
  getVideojuego,
  updateVideojuego,
  deleteVideojuego,
} from "../controllers/videojuegoController.js";

const router = express.Router();

// Endpoints CRUD para Videojuegos
router.post("/videojuegos", createVideojuego);         // Crear videojuego
router.get("/videojuegos", getVideojuego);             // Leer videojuegos
router.put("/videojuegos/:id", updateVideojuego);      // Actualizar videojuego
router.delete("/videojuegos/:id", deleteVideojuego);   // Eliminar videojuego

export default router;
