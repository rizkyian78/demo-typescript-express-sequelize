import { Request, Response } from 'express'
import models from '../models/models'
import { successResponse } from '../utils/response'

const {User}  = models


class UserController {
    public static async createTodo(req: Request, res: Response) {
        const data = await User.create(req.body)
        return successResponse(res, 200, data)
    }
}

export default UserController