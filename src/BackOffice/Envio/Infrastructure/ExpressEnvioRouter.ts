import { Router } from 'express'
import { ExpressEnvioController } from './ExpressEnvioController.js'

const controller = new ExpressEnvioController()

export const ExpressEnvioRouter = Router()

ExpressEnvioRouter.get('/', controller.getEnvios)
ExpressEnvioRouter.post('/', controller.createEnvio)
ExpressEnvioRouter.put('/', controller.updateEnvio)
ExpressEnvioRouter.delete('/:id', controller.deleteEnvio)