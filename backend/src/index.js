import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routers/main.router.js";
import { conexionDB } from "./db/database.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router) +
  app.listen(3000, async () => {
    const conexion = await conexionDB();
    if (!conexion) {
      console.log("error en la conexion de la base de datos con el servidor ");
      process.exit();
    } else {
      console.log("server is running on port 3000");
      conexion.end();
    }
  });
