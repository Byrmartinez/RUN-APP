import { NextFunction, Request, Response } from 'express'
import { CreateDatosRiderDTO } from '../Aplication/CreateDatosRiderUseCase'
import { ServicesContainer } from '../../Shared/ServiceContainer'
import { DatosRiderParametersNotValid } from '../Domain/Exceptions/DatosRiderParameterNotValid'
import { DatosRiderAlreadyExists } from '../Domain/Exceptions/DatosRiderAlreadyExists'


export class ExpressDatosRiderController {

    async createDatosRider(req: Request, res: Response, next: NextFunction) {

        try {
            console.log('en el try')
            const datosRider: CreateDatosRiderDTO = req.body
            const newDatosRider = await ServicesContainer.datosRider.create.execute(datosRider)
            return res.status(201).json(newDatosRider.mapToDTO())
        } catch (error) {
            /*if (error instanceof UsuarioParametersNotValid) {
                return res.status(400).json({ message: error.message })
            }*/

            if (error instanceof DatosRiderAlreadyExists) {
                return res.status(400).json({ message: error.message })
            }

            throw error
        }
    }
    async updateDatosRider(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.datosRider.update.execute(req.body)
        return res.status(204).json()
    }

    async deleteDatosRider(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.datosRider.delete.execute(req.params.id)
        return res.status(204).json()
    }

    async getDatosRiders(req: Request, res: Response, next: NextFunction) {

        const { id, patente } = req.query

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
            const datosRider = await ServicesContainer.datosRider.getOneById.execute(id)
            if (datosRider) {
                console.log('llendo a mapear usuario')
                return res.status(200).json(datosRider.mapToDTO())
            } else {
                console.log('ejecutado else')
                return res.status(404).json({ message: 'Not found' })
            }
        }

        if (patente) {
            console.log('get by email')
            if (!patente) {
                console.log('distinto email')
                res.status(400).json({ message: 'Email is required' })
                return
            }

            if (typeof patente !== 'string') {
                console.log('get by sring')
                return res.status(400).json({ message: 'Email format incorrect' })
            }

            const datosRider = await ServicesContainer.datosRider.getOneByPatente.execute(patente)
            if (datosRider) {
                return res.status(200).json(datosRider.mapToDTO())
            } else {
                return res.status(404).json({ message: 'Not found' })
            }
        }

        console.log('get all')
        const datosRiders = await ServicesContainer.datosRider.getAll.execute()
        return res.status(200).json(datosRiders.map(datosRider => datosRider.mapToDTO()))

    }

}