import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import TodoRoute from "./route/todolist";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.use(TodoRoute);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
