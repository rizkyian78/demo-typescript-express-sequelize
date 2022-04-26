import {Request, Response, NextFunction} from 'express'

const Authorization = (req: Request, res: Response, next: NextFunction) => {

    if(req.headers.authorization) {
        return res.status(500).json({message: "terjadi kesalahan"})
    }
    next()
}

export {
    Authorization,
}