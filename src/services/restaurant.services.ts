import { Prisma, PrismaClient } from "@prisma/client"
import  Boom from "@hapi/boom";
import { any } from "zod";
import { query } from "express";
const prisma = new PrismaClient({
});



export const getAll= async() => {
    return await prisma.restaurant.findMany({
        include: {
          contacts: true
        }
      })
    }
    


export const update = async (id: number, restro:any) => {
try {
   return await prisma.restaurant.update({
    data:{
        name:restro.name,
                description:restro.description,
                address:restro.address

        
    },
   
    where:{
        id: Number(id)
    }
})
}catch (err: any){
    // console.log("Error po aayo haii hajur ") 
    console.log(err)
    if(err.code === 'P2025'){
    throw Boom.notFound("Change garna khojeko data xaina haii hajur")
}else{
  throw (err)
}
}
}


export const postRestro = async (body:any) =>{
    try{
        return await prisma.restaurant.create({  
            data:{
            
                name: body.name,
                description:body.description,
                address:body.address,


               
            }
            
        })
    }catch(err:any){
        throw Boom.forbidden("you can not post ")
    }
  
}


export const remove = async (id: any) =>{
    try{
        return  await prisma.restaurant.delete({where: {id:id}})

    }catch(err:any){
       
    
    console.log(err)
    if(err.code === 'P2025'){
    throw Boom.notFound("DATA NOT FOUND TO DELETE")
}else{
  throw err
}
}
}

export const Get = async (id: number ) =>{
    try{
         return await prisma.restaurant.findFirstOrThrow({
            where:{id:Number(id) },
        })
        return "Naya Api banyo"
    } catch (err: any){
      console.log("Error po aayo haii hajur ") 
      console.log(err)
      if(err.code === 'P2025'){
      throw Boom.notFound("ERROR DATA NOT FOUND")
}else{
    throw err
}
}
}


export function postContact(body: any, restaurant_id: any) {
    throw new Error("Function not implemented.");
}

export function postReview(body: any) {
    throw new Error("Function not implemented.");
}