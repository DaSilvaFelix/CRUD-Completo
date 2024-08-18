import Router from "express";
import {
  actualizaTareas,
  elimitarTarea,
  recibirTareas,
  traerTareas,
  traerTareasPorId,
} from "../controllers/tareas.controllers.js";
import { validadorTareas } from "../validation/tareas.validation.js";
import validationReques from "../middlewares/validationMiddleware.js";

const router = Router();

router.get("/tareas", traerTareas);
router.get("/tareas/:id", traerTareasPorId);
router.delete("/tareas/:id", elimitarTarea);
router.put("/tareas/:id", validadorTareas, validationReques, actualizaTareas);
router.post("/tareas", validadorTareas, validationReques, recibirTareas);

export { router };
