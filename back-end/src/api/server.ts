import express, { Request, Response } from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";
import { fileURLToPath } from 'url';

export const createServer = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  const app = express();
  const PORT = 3001;

  app.use(cors());

  app.get("/api/", (request: Request, response: Response) => {
    response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
  });

  app.get("/api/artists", async (request: Request, response: Response) => {
    response.send(await db.collection("artists").find({}).toArray());
  });

  app.get("/api/songs", async (request: Request, response: Response) => {
    response.send(await db.collection("songs").find({}).toArray());
  });
  
  const frontendPath = path.join(__dirname, "../../../front-end/dist");
  
  app.use(express.static(frontendPath));
  
  app.get("*", async (request: Request, response: Response) => {
    response.sendFile(path.join(frontendPath, "index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
  });
};