import express, { Express, Request, Response } from 'express';
import models from '../models/models'
import dotenv from 'dotenv';

const {TodoList}  = models

dotenv.config();

const app: Express = express();


const port = 3000;

app.get('/coba', async (req: Request, res: Response) => {
    const data = await TodoList.create({
        name:"ian"
    })
    res.status(200).json(data)
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
