
import { NextFunction, Request, Response } from "express"
import * as TodoService from '../services/todo.services'
import httpStatus from 'http-status-codes'
export const getAll =async (req: Request, res: Response, next: NextFunction) => {
  const activeStatus = req.query.active
  try{
  const todos =await TodoService.getTodos(Boolean(activeStatus))
  res.send(todos)
}catch(err){
  next(err)
}
}
export const postTodos =async (req: Request, res: Response, next: NextFunction) => {
  const todo: any = req.body
  console.log(req.body, ' is request body')
  const todos= await TodoService.postTodos(req.body, (req as any ).user.userId)
  res.status(httpStatus.CREATED).send(todos)
}
export const update =async (req: Request, res: Response, next: NextFunction) => {
  const todo: any = req.body
  const id = Number(req.params.id)
  try{
  const todos =await TodoService.update(id, todo)
  res.send(todos)
}catch(err){
  next(err)
}
}
export const remove = async  (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id)
  console.log(id, ' request params ko id yo ho hai')
  try {
  const todos = await TodoService.remove(id)
  res.status(httpStatus.NO_CONTENT).send()
}catch(err){
  next(err)
}
}
export const Get = async(req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id)
  console.log(id,)
  try{
  const todos =await TodoService.Get(id)
res.send(todos)
  }catch(err) {
    next(err)
  } 
}






// homework
// learn typescript, finish CRUD in boilerplate
// codeacademy finish
