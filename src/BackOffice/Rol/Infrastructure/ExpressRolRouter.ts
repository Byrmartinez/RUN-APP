import { Router } from 'express'
import { ExpressRolController } from './ExpressRolController.js'

const controller = new ExpressRolController()

export const ExpressRolRouter = Router()

ExpressRolRouter.get('/', controller.getRoles)
ExpressRolRouter.post('/', controller.createRol)
ExpressRolRouter.put('/', controller.updateRol)
ExpressRolRouter.delete('/:id', controller.deleteRol)