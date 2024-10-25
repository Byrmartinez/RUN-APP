import { Router } from 'express'
import { ExpressHistorialExitoController } from './ExpressHistorialExitoController.js'

const controller = new ExpressHistorialExitoController()

export const ExpressHistorialExitoRouter = Router()

ExpressHistorialExitoRouter.get('/', controller.getHistorialExitos)
ExpressHistorialExitoRouter.post('/', controller.createHistorialExito)
ExpressHistorialExitoRouter.put('/', controller.updateHistorialExito)
ExpressHistorialExitoRouter.delete('/:id', controller.deleteHistorialExito)