import { json } from "express";
import { conexionDB } from "../db/database.js";

export const traerTareas = async (req, res) => {
  try {
    const conexion = await conexionDB();
    const consulta = "SELECT * FROM `tareas`";
    const resultado = await conexion.query(consulta);
    res.json(resultado[0]);
    conexion.end();
  } catch (error) {
    console.log(error);
    console.log("error al enviar los datos");
    res.status(500).json({
      mensaje:
        "el servidor esta fuera de servicio o no esta conectada la base de datos",
    });
  }
};

export const traerTareasPorId = async (req, res) => {
  try {
    const { id } = req.params;
    if (id > 0) {
      const conexion = await conexionDB();
      const consulta = "SELECT * FROM `tareas` WHERE id_tareas = ?";
      const resultado = await conexion.query(consulta, id);
      if (resultado[0].length === 0) {
        res.status(404).json({
          mensaje: "no se encontro la tarea con el id solicitado",
        });
      } else {
        res.json(resultado[0]);
      }
    } else {
      res.status(404).json({
        mensaje: "el id de la tarea no es valido",
      });
    }
  } catch (error) {
    console.log(error);
    console.log("error al traer tareas por id");
    res.status(500).json({
      "mensaje-erro-0": "error en el servidor o la base de datos",
      "mensaje-erro-1": "no su pudo hacer la busqueda",
    });
  }
};

export const recibirTareas = async (req, res) => {
  try {
    const { nombre, descripción, completadad } = req.body;
    const conexion = await conexionDB();
    const consulta =
      "INSERT INTO `tareas`(`nombre`, `descripción`, `completadad`) VALUES (?,?,?)";
    const resultado = await conexion.query(consulta, [
      nombre,
      descripción,
      completadad,
    ]);
    if (!resultado) {
      return (
        res.status(500),
        json({
          mensaje: "no se pudo crear la tarea",
        })
      );
    } else {
      return res.json({
        mensaje: "tarea creada con exito",
      });
    }
  } catch (error) {
    console.log(error);
    console.log("error al recibir el la tarea");
    res.status(500).json({
      "mensaje-error-0": "error en el servidor o la base de datos",
      "mensaje-error-1": "no se pudo crear la tareas",
    });
  }
};

export const elimitarTarea = async (req, res) => {
  try {
    const { id } = req.params;
    if (id > 0) {
      const conexion = await conexionDB();
      const consulta = "SELECT * FROM `tareas` WHERE `id_tareas` = ?";
      const resultado = await conexion.query(consulta, [id]);
      if (resultado[0].length === 0) {
        return res.json({
          mensaje: "no existe la tarea para eliminar",
        });
      } else {
        const consulta2 = "DELETE FROM `tareas` WHERE `id_tareas` = ?";
        await conexion.query(consulta2, id);
        return res.json({
          mensaje: "tarea eliminada con exito",
        });
      }
    } else {
      res.status(404).json({
        mensaje: "no se pudo eliminar la tarea",
      });
    }
  } catch (error) {
    console.log(error);
    console.log("error en eliminar la tarea");
    res.status(500).json({
      "mensaje-error-0": "error en el servidor o la base de datos",
      "mensaje-error-1": "no se pudo eliminar la tarea",
    });
  }
};

export const actualizaTareas = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripción, completadad } = req.body;
    if (id > 0) {
      const conexion = await conexionDB();
      const consulta = "SELECT  * FROM tareas WHERE id_tareas = ?";
      const resultado = await conexion.query(consulta, [id]);
      if (resultado[0].length === 0) {
        return res.json({
          mensaje: "no existe la tarea para actualizar",
        });
      } else {
        const conexion = await conexionDB();
        const consulta =
          "UPDATE `tareas` SET `nombre`=?,`descripción`=?,`completadad`=? WHERE `id_tareas`=?";
        await conexion.query(consulta, [nombre, descripción, completadad, id]);
        return res.json({
          mensaje: "tarea actualizada con exito",
        });
      }
    } else {
      res.status(404).json({
        mensaje: "parametros no valido para actualizar tareas",
      });
    }
  } catch (error) {
    console.log(error);
    console.log("error en los controles de actualizacion");
    res.status(500).json({
      "mensaje-erro-0": "error en el servidor o la base de datos",
      "mensaje-error-1": "no se pudo realizar la actualizacion de la tarea",
    });
  }
};
