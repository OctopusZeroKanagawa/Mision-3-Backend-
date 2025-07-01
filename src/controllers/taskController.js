import prisma from "../prismaClient.js";

// CREAMOS LOS CONTROLADORES PARA EL MODELO TAREAS

// EVENT LOOP

export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        user: true,
        category: true,
      },
    });
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTask = async (req, res) => {
  const { title, description, userId, categoryId } = req.body;

  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId,
        categoryId,
      },
    });
    res.json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(400).json({ error: "Error al Crear tarea" });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed, userId, categoryId } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { title, description, completed, userId, categoryId },
    });
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
};

// Eliminar una tarea
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({ where: { id: Number(id) } });
    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
};
