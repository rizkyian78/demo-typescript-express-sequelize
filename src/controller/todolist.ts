import { Request, Response } from 'express'
import models from '../models/models'
import { successResponse } from '../utils/response'

const {TodoList}  = models


class TodoController {
    public static async createTodo(req: Request, res: Response) {
        const data = await TodoList.create(req.body)
        return successResponse(res, 200, data)
    }
}

export default TodoController