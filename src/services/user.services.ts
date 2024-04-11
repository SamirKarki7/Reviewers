import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'
import  Boom  from "@hapi/boom";
import * as jwt from 'jsonwebtoken'
import { z } from "zod";
import { createUserDtoBody } from "../validators/create-user.validator";
const prisma = new PrismaClient();
export const createUser = async(user: z.infer<typeof createUserDtoBody>) => {
    const {email,password,isAdmin} = user
    return await prisma.user.create({
        data: {
            email,
            password: await bcrypt.hash(password, 10),
            isAdmin,
        },
    })

}
export async function login(email: string, password: string) {
    const user = await prisma.user.findFirstOrThrow({ where: { email } })

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        // Password does not match
        // If you want to throw a http error, you can. This is throw internal server error
        Boom.conflict('Password galat vayeko xa hai')
    }

    // Generate a token
    const token = jwt.sign(
        { userId: user.id, isAdmin: user.isAdmin },
        'random-secret',
        {
            expiresIn: '1h',
        }
    )

    // Return the token to the client
    return { success: true, token }
}
export const remove = async (userId: any) =>{
    try{
        return  await prisma.user.delete({where: {id:userId}})

    }catch(err:any){
       
    
    console.log(err)
    if(err.code === 'P2003'){
    throw Boom.notFound("Todos delete garnu hola pahila ")
}else{
  throw err
}
}
}