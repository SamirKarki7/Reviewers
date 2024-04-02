import { NextFunction, Request, Response } from "express"

 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 export const getAll =(req: Request, res: Response, next: NextFunction) => {
    res.send("goooooo horaaaa")
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//  export const post = (req: Request, res: Response, next: NextFunction) => {
    // const todos = TodoServices.getTodos()
//    res.send("Hi my name is Samir")
//  } 