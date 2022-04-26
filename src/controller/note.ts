import { Request, Response } from 'express'
import models from '../models/models'
import { successResponse } from '../utils/response'

const {User,Note}  = models


class NoteController {
    public static async createTodo(req: Request, res: Response) {
        const data = await Note.create(req.body)
        return successResponse(res, 200, data)
    }
}

export default NoteController