import { body } from "express-validator";

export const validadorTareas = [
  body("nombre")
    .notEmpty()
    .withMessage("el nombre de la tarea no tiene que estar vacia")
    .isString()
    .withMessage("el campo debe contener solo una candena de texto")
    .isLength({ min: 4, max: 20 })
    .withMessage(
      "el nombre de la tarea debe ser mayor a 4 y menor a 20 caracteres"
    ),
  body("descripción")
    .notEmpty()
    .withMessage("la descripción no debe estar vacia")
    .isString()
    .withMessage("la descripción debe ser una cadena de texto")
    .isLength({ min: 5, max: 200 })
    .withMessage("la descripón debe ser mayor a 5 y menor a 200 caractes"),
  body("completadad")
    .notEmpty()
    .withMessage("el campo no debe estar vacio")
    .isBoolean()
    .withMessage("el campo debe ser solo verdadero o falso "),
];
