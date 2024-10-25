import { Router } from 'express'
import { ExpressHistorialCanceladoController } from './ExpressHistorialCanceladoController.js'

const controller = new ExpressHistorialCanceladoController()

export const ExpressHistorialCanceladoRouter = Router()

ExpressHistorialCanceladoRouter.get('/', controller.getHistorialCancelados)
ExpressHistorialCanceladoRouter.post('/', controller.createHistorialCancelado)
ExpressHistorialCanceladoRouter.put('/', controller.updateHistorialCancelado)
ExpressHistorialCanceladoRouter.delete('/:id', controller.deleteHistorialCancelado)