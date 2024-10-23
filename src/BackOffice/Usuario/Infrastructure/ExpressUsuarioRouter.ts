import { Router } from 'express'
import { ExpressUsuarioController } from './ExpressUsuarioController.js'

const controller = new ExpressUsuarioController()

export const ExpressUsuarioRouter = Router()

ExpressUsuarioRouter.get('/', controller.getUsuarios)
ExpressUsuarioRouter.post('/', controller.createUsuario)
ExpressUsuarioRouter.put('/', controller.updateUsuario)
ExpressUsuarioRouter.delete('/:id', controller.deleteUsuario)