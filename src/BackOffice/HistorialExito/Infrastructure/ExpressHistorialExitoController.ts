import { NextFunction, Request, Response } from 'express'
import { CreateHistorialExitoDTO } from '../Aplication/CreateHistorialExitoUseCase'
import { ServicesContainer } from '../../Shared/ServiceContainer'
import { HistorialExitoParametersNotValid } from '../Domain/Exceptions/HistorialExitoParameterNotValid'
import { HistorialExitoAlreadyExists } from '../Domain/Exceptions/HistorialExitoAlreadyExists'


export class ExpressHistorialExitoController {

    async createHistorialExito(req: Request, res: Response, next: NextFunction) {

        try {
            console.log('en el try')
            const historialExito: CreateHistorialExitoDTO = req.body
            const newHistorialExito = await ServicesContainer.historialExito.create.execute(historialExito)
            return res.status(201).json(newHistorialExito.mapToDTO())
        } catch (error) {
            /*if (error instanceof UsuarioParametersNotValid) {
                return res.status(400).json({ message: error.message })
            }*/

            if (error instanceof HistorialExitoAlreadyExists) {
                return res.status(400).json({ message: error.message })
            }

            throw error
        }
    }
    async updateHistorialExito(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.historialExito.update.execute(req.body)
        return res.status(204).json()
    }

    async deleteHistorialExito(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.historialExito.delete.execute(req.params.id)
        return res.status(204).json()
    }

    async getHistorialExitos(req: Request, res: Response, next: NextFunction) {

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
            const historialExito = await ServicesContainer.historialExito.getOneById.execute(id)
            if (historialExito) {
                console.log('llendo a mapear HistorialExito')
                return res.status(200).json(historialExito.mapToDTO())
            } else {
                console.log('ejecutado else')
                return res.status(404).json({ message: 'Not found' })
            }
        }



        console.log('get all')
        const historialExitos = await ServicesContainer.historialExito.getAll.execute()
        return res.status(200).json(historialExitos.map(historialExito => historialExito.mapToDTO()))

    }

}