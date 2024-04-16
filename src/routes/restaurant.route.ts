/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express'

import * as RestroController from '../controllers/restaurant.controller'
import { validate } from '../utils/validate'
import { createRestro, updateRestroDto } from '../validators/create-restaurant-validators'
import { authenticateToken, is_admin } from '../middlewares/authentication'
const route = express.Router()


route.get('/',  RestroController.getAll)
route.post('/',validate(createRestro), authenticateToken ,is_admin ,RestroController.postRestro)
route.patch('/:id',validate(updateRestroDto),authenticateToken, is_admin, RestroController.update)
route.delete('/:id',authenticateToken,is_admin, RestroController.remove)
route.get('/:id',authenticateToken,RestroController.Get)
export default route;