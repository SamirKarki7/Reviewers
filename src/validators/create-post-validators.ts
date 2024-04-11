/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { z} from 'zod'
export const createTodoDtoBody =  z.object({
    name: z.string({
        required_error: 'Title is necessary',
    }),
    active: z.boolean( {
        required_error: 'Active status is required'
    })
    
}).strict()
export const createTodo = z.object({
    body: createTodoDtoBody

})
