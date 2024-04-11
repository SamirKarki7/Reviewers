import {Prisma, PrismaClient } from "@prisma/client"
import  Boom  from "@hapi/boom";

const prisma= new PrismaClient();
// export async function mainSeeder() {
//   try{
//     await prisma.todo.delete({where: {id: 2}})
//   } catch(e) {
//     console.log(e, 'testing something')
//   };
  
// }
export const getTodos = async (active:boolean) =>{
  return prisma.todo.findMany()
}

  
  
  
  export const postTodos = async (body: any, userId: number) => {
    return await prisma.todo.create ({
      data: {
        userId: userId,
        name: body.name,
        active: body.active
      }
    })
  }

  

  export const update = async (id:number, todo: any) => {
   try{
    return await prisma.todo.update({
 
  data:{
    name: todo.name,
    active: true
   
  }, 
  where:{
    id: id
  }
  })

}catch(err:any){
console.log(err)
if (err.code === 'P2025') {
  throw Boom.notFound('Update garna khojeko data xaina')
 }else {
  throw err
 }
}
}
export const remove = async (id: any) =>{
  try{
      return  await prisma.todo.delete({where: {id:id}})

  }catch(err:any){
     
  
  console.log(err)
  if(err.code === 'P2025'){
  throw Boom.notFound("DATA NOT FOUND TO DELETE")
}else{
throw err
}
}
}

  export const Get = async (id: number) => {
    try {
      return await prisma.todo.findFirstOrThrow({
        where: {id: Number(id) },

      })
      

    }catch (err: any) {
     console.log('error come')
     console.log(err)
     if (err.code === 'P2025') {
      throw Boom.notFound('Post not found')
     }else {
      throw err
     }
  }
}

  