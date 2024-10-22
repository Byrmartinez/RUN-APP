import { Router } from 'express'
import { ExpressProveedorController } from './ExpressProveedorController.js'

const controller = new ExpressProveedorController()

export const ExpressProveedorRouter = Router()

ExpressProveedorRouter.post('/', controller.createProveedor)
