import { NextFunction, Request, Response } from 'express'
import { CreateDatosPymeDTO } from '../Aplication/CreateDatosPymeUseCase'
import { ServicesContainer } from '../../Shared/ServiceContainer'
import { DatosPymeParametersNotValid } from '../Domain/Exceptions/DatosPymeParameterNotValid'
import { DatosPymeAlreadyExists } from '../Domain/Exceptions/DatosPymeAlreadyExists'


export class ExpressDatosPymeController {

    async createDatosPyme(req: Request, res: Response, next: NextFunction) {

        try {
            console.log('en el try')
            const datosPyme: CreateDatosPymeDTO = req.body
            console.log(datosPyme)
            const newDatosPyme = await ServicesContainer.datosPyme.create.execute(datosPyme)
            return res.status(201).json(newDatosPyme.mapToDTO())
        } catch (error) {
            /*if (error instanceof UsuarioParametersNotValid) {
                return res.status(400).json({ message: error.message })
            }*/

            if (error instanceof DatosPymeAlreadyExists) {
                return res.status(400).json({ message: error.message })
            }

            throw error
        }
    }
    async updateDatosPyme(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.datosPyme.update.execute(req.body)
        return res.status(204).json()
    }

    async deleteDatosPyme(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.datosPyme.delete.execute(req.params.id)
        return res.status(204).json()
    }

    async getDatosPymes(req: Request, res: Response, next: NextFunction) {

        const { id, email } = req.query

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
            const datosPyme = await ServicesContainer.datosPyme.getOneById.execute(id)
            if (datosPyme) {
                console.log('llendo a mapear usuario')
                return res.status(200).json(datosPyme.mapToDTO())
            } else {
                console.log('ejecutado else')
                return res.status(404).json({ message: 'Not found' })
            }
        }

        if (email) {
            console.log('get by email')
            if (!email) {
                console.log('distinto email')
                res.status(400).json({ message: 'Email is required' })
                return
            }

            if (typeof email !== 'string') {
                console.log('get by sring')
                return res.status(400).json({ message: 'Email format incorrect' })
            }

            const datosPyme = await ServicesContainer.datosPyme.getOneByEmail.execute(email)
            if (datosPyme) {
                return res.status(200).json(datosPyme.mapToDTO())
            } else {
                return res.status(404).json({ message: 'Not found' })
            }
        }

        console.log('get all')
        const datosPymes = await ServicesContainer.datosPyme.getAll.execute()
        return res.status(200).json(datosPymes.map(datosPyme => datosPyme.mapToDTO()))

    }

}