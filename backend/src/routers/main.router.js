import Router from "express";
import {
  actualizaTareas,
  elimitarTarea,
  recibirTareas,
  traerTareas,
  traerTareasPorId,
} from "../controllers/tareas.controllers.js";

const router = Router();

router.get("/tareas", traerTareas);
router.get("/tareas/:id", traerTareasPorId);
router.delete("/tareas/:id", elimitarTarea);
router.put("/tareas/:id", actualizaTareas);
router.post("/tareas", recibirTareas);

export { router };
