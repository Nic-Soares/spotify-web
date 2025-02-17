import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";
import { fileURLToPath } from 'url';

export const createServer = () => {
  // Obter o caminho do arquivo atual
  const __filename = fileURLToPath(import.meta.url);
  // Obter o diretório do arquivo atual
  const __dirname = path.dirname(__filename);
  
  const app = express();
  const PORT = 3001;

  app.use(cors());
  // app.use(express.json());

  app.get("/api/", (request, response) => {
    response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
  });

  app.get("/api/artists", async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
  });

  app.get("/api/songs", async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
  });
  
  // Ajustando o caminho para subir três níveis (src/api -> back-end -> spotify-web -> front-end)
  const frontendPath = path.join(__dirname, "../../../front-end/dist");
  
  app.use(express.static(frontendPath));
  
  app.get("*", async (request, response) => {
    response.sendFile(path.join(frontendPath, "index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
  });
};