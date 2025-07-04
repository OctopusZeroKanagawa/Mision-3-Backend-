import prisma from "../prismaClient.js";

export const getVideojuego = async (req, res) => {
  try {
    const videojuegos = await prisma.videojuego.findMany({
      include: {
        plataforma: true,
        genero: true,
        compania_videojuego: {
          include: {
            compania: true,
            rol: true
          }
        }
      }
    });
    res.json(videojuegos);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createVideojuego = async (req, res) => {
  const { titulo, descripcion, anio_lanzamiento, plataformaId, generoId, multijugador, calificacion } = req.body;
  try {
    const videojuego = await prisma.videojuego.create({
      data: {
        titulo,
        descripcion,
        anio_lanzamiento,
        plataformaId,
        generoId,
        multijugador,
        calificacion
      }
    });
    res.json(videojuego);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(400).json({ error: "Error al Crear el videojuego" });
  }
};

export const updateVideojuego = async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, anio_lanzamiento, plataformaId, generoId, multijugador, calificacion } = req.body;

  try {
    const videojuegoActualizado = await prisma.videojuego.update({
      where: { id: Number(id) },
      data: {
        titulo,
        descripcion,
        anio_lanzamiento,
        plataformaId,
        generoId,
        multijugador,
        calificacion
      }
    });

    res.json(videojuegoActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el videojuego" });
  }
};

export const deleteVideojuego = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.videojuego.delete({ where: { id: Number(id) } });
    res.json({ message: "Videojuego eliminado" });
  } catch (error) {
    res.status(400).json({ error: "Error al eliminar el videojuego" });
  }
};
