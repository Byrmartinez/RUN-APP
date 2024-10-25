import { NextFunction, Request, Response } from 'express'
import { CreateHistorialCanceladoDTO } from '../Aplication/CreateHistorialCanceladoUseCase'
import { ServicesContainer } from '../../Shared/ServiceContainer'
import { HistorialCanceladoParametersNotValid } from '../Domain/Exceptions/HistorialCanceladoParameterNotValid'
import { HistorialCanceladoAlreadyExists } from '../Domain/Exceptions/HistorialCanceladoAlreadyExists'


export class ExpressHistorialCanceladoController {

    async createHistorialCancelado(req: Request, res: Response, next: NextFunction) {

        try {
            console.log('en el try')
            const historialCancelado: CreateHistorialCanceladoDTO = req.body
            const newHistorialCancelado = await ServicesContainer.historialCancelado.create.execute(historialCancelado)
            return res.status(201).json(newHistorialCancelado.mapToDTO())
        } catch (error) {
            /*if (error instanceof UsuarioParametersNotValid) {
                return res.status(400).json({ message: error.message })
            }*/

            if (error instanceof HistorialCanceladoAlreadyExists) {
                return res.status(400).json({ message: error.message })
            }

            throw error
        }
    }
    async updateHistorialCancelado(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.historialCancelado.update.execute(req.body)
        return res.status(204).json()
    }

    async deleteHistorialCancelado(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.historialCancelado.delete.execute(req.params.id)
        return res.status(204).json()
    }

    async getHistorialCancelados(req: Request, res: Response, next: NextFunction) {

        const { id } = req.query

        if (id) {
            console.log('get by id akiiii')
            if (!id) {
                console.log('no hay id')
                res.status(400).json({ message: 'Id is required' })
                return
            }

            if (typeof id !== 'string') {
                console.log('diferente de estring')
                return res.status(400).json({ message: 'Id format incorrect' })
            }

            console.log('ejecutado getonebyid')
            const historialCancelado = await ServicesContainer.historialCancelado.getOneById.execute(id)
            if (historialCancelado) {
                console.log('llendo a mapear HistorialCancelado')
                return res.status(200).json(historialCancelado.mapToDTO())
            } else {
                console.log('ejecutado else')
                return res.status(404).json({ message: 'Not found' })
            }
        }



        console.log('get all')
        const historialCancelados = await ServicesContainer.historialCancelado.getAll.execute()
        return res.status(200).json(historialCancelados.map(historialCancelado => historialCancelado.mapToDTO()))

    }

}