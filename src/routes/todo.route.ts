
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express'
// import { getAll } from '../controllers/todo.controller'
import * as TodoController from '../controllers/todo.controller'
import { validate } from '../utils/validate';
import { createTodo} from '../validators/create-post-validators'
import { authenticateToken, isAdmin } from '../middlewares/authentication';
const route = express.Router()



route.get('/',authenticateToken, TodoController.getAll)

route.post('/', validate(createTodo), authenticateToken, TodoController.postTodos)

route.delete('/:id',authenticateToken, TodoController.remove)

route.patch('/:id',authenticateToken, isAdmin, TodoController.update)

route.get('/:id',
 TodoController.Get)



export default route;
