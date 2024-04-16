/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction,Request,Response } from "express"
import * as RestroService from '../services/restaurant.services'
import { number } from "zod"
import HttpStatus from 'http-status-codes';

export const getAll = async(req: Request,res: Response,next: NextFunction)=>{
    
    try {
     
      const data = await RestroService.getAll()
      res.json(data)
  } catch (err) {
      next(err)
  
}
}

export const postRestro =async(req: Request, res:Response) =>{
    const restro: any  = req.body
    console.log(req.body,'is request body')
    const restaurants =await RestroService.postRestro(req.body)
    res.status(HttpStatus.CREATED).send(restaurants)
}


export const update = async (req: Request, res:Response, next:NextFunction)  =>{

 try{
  const restros:any  = req.body
  const id = Number(req.params.id)
const restaurants = await RestroService.update(id,restros)
res.status(HttpStatus.ACCEPTED).send(restaurants)
 }catch(err){
  next(err)
 }
}


  export const remove = async  (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    console.log(id, ' request params ko id yo ho hai')
    try {
    const todos = await RestroService.remove(id)
    res.status(HttpStatus.NO_CONTENT).send()
  }catch(err){
    next(err)
  }
  }


  
  export const Get = async (req: Request,res: Response,next: NextFunction)=>{
    
    const id = Number(req.params.id)
    console.log(id)

    try{
    const todos = await RestroService.Get(id)
    res.status(HttpStatus.OK).send(todos)
    }catch(err){
next(err)
    }

}