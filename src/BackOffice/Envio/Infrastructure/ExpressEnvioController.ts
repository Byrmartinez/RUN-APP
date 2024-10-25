import { NextFunction, Request, Response } from 'express'
import { CreateEnvioDTO } from '../Aplication/CreateEnvioUseCase'
import { ServicesContainer } from '../../Shared/ServiceContainer'
import { EnvioParametersNotValid } from '../Domain/Exceptions/EnvioParameterNotValid'
import { EnvioAlreadyExists } from '../Domain/Exceptions/EnvioAlreadyExists'


export class ExpressEnvioController {

    async createEnvio(req: Request, res: Response, next: NextFunction) {

        try {
            console.log('en el try')
            const envio: CreateEnvioDTO = req.body
            const newEnvio = await ServicesContainer.envio.create.execute(envio)
            return res.status(201).json(newEnvio.mapToDTO())
        } catch (error) {
            /*if (error instanceof UsuarioParametersNotValid) {
                return res.status(400).json({ message: error.message })
            }*/

            if (error instanceof EnvioAlreadyExists) {
                return res.status(400).json({ message: error.message })
            }

            throw error
        }
    }
    async updateEnvio(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.envio.update.execute(req.body)
        return res.status(204).json()
    }

    async deleteEnvio(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.envio.delete.execute(req.params.id)
        return res.status(204).json()
    }

    async getEnvios(req: Request, res: Response, next: NextFunction) {

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
            const envio = await ServicesContainer.envio.getOneById.execute(id)
            if (envio) {
                console.log('llendo a mapear usuario')
                return res.status(200).json(envio.mapToDTO())
            } else {
                console.log('ejecutado else')
                return res.status(404).json({ message: 'Not found' })
            }
        }



        console.log('get all')
        const envios = await ServicesContainer.envio.getAll.execute()
        return res.status(200).json(envios.map(envio => envio.mapToDTO()))

    }

}