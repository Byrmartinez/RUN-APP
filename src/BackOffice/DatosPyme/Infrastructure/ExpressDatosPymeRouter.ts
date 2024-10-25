import { Router } from 'express'
import { ExpressDatosPymeController } from './ExpressDatosPymeController.js'

const controller = new ExpressDatosPymeController()

export const ExpressDatosPymeRouter = Router()

ExpressDatosPymeRouter.get('/', controller.getDatosPymes)
ExpressDatosPymeRouter.post('/', controller.createDatosPyme)
ExpressDatosPymeRouter.put('/', controller.updateDatosPyme)
ExpressDatosPymeRouter.delete('/:id', controller.deleteDatosPyme)