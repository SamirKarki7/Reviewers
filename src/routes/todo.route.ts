/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express'
// import { getAll } from '../controllers/todos.controller'
import * as TodoContreller from '../controllers/todo.controller'
const route = express.Router()
route.get('/', TodoContreller.getAll)
// route.post('/', TodoContreller.post) 

export default route;