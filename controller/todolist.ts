import { Request, Response } from 'express'
import models from '../models/models'

const {TodoList}  = models


class TodoController {
    public static async createTodo(req: Request, res: Response) {
        const data = await TodoList.create(req.body)
        return res.status(200).json(data)
    }
}

export default TodoController