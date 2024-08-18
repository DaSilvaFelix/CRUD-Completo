import mysql from "mysql2/promise";

export const conexionDB = async () => {
  try {
    return await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "tareas",
    });
  } catch (error) {
    console.log(error);
  }
};
