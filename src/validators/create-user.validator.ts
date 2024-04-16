/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { z } from 'zod'
// import { is_admin } from '../middlewares/authentication'
export const createUserDtoBody = z.object({
    name: z.string({
        required_error: 'name is required'
    }),
    email: z
        .string({
            required_error: 'email is required',
        })
        .email('It is an email'),
    password: z.string({
        required_error: 'password is required',
    }),
    is_admin: z.boolean().optional().default(false)
})

export const createUserDto = z.object({
    body: createUserDtoBody
})