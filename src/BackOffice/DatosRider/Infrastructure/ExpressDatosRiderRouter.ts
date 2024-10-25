import { Router } from 'express'
import { ExpressDatosRiderController } from './ExpressDatosRiderController.js'

const controller = new ExpressDatosRiderController()

export const ExpressDatosRiderRouter = Router()

ExpressDatosRiderRouter.get('/', controller.getDatosRiders)
ExpressDatosRiderRouter.post('/', controller.createDatosRider)
ExpressDatosRiderRouter.put('/', controller.updateDatosRider)
ExpressDatosRiderRouter.delete('/:id', controller.deleteDatosRider)