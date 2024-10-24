import { NextFunction, Request, Response } from 'express'
import { CreateRolDTO } from '../Aplication/CreateRolUseCase'
import { ServicesContainer } from '../../Shared/ServiceContainer'
import { RolParametersNotValid } from '../Domain/Exceptions/RolParameterNotValid'
import { RolAlreadyExists } from '../Domain/Exceptions/RolAlreadyExists'


export class ExpressRolController {

    async createRol(req: Request, res: Response, next: NextFunction) {

        try {
            console.log('en el try')
            const rol: CreateRolDTO = req.body
            const newRol = await ServicesContainer.rol.create.execute(rol)
            return res.status(201).json(newRol.mapToDTO())
        } catch (error) {
            /*if (error instanceof UsuarioParametersNotValid) {
                return res.status(400).json({ message: error.message })
            }*/

            if (error instanceof RolAlreadyExists) {
                return res.status(400).json({ message: error.message })
            }

            throw error
        }
    }
    async updateRol(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.rol.update.execute(req.body)
        return res.status(204).json()
    }

    async deleteRol(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.rol.delete.execute(req.params.id)
        return res.status(204).json()
    }

    async getRoles(req: Request, res: Response, next: NextFunction) {

        const { id, nombre } = req.query

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
            const rol = await ServicesContainer.rol.getOneById.execute(id)
            if (rol) {
                console.log('llendo a mapear rol')
                return res.status(200).json(rol.mapToDTO())
            } else {
                console.log('ejecutado else')
                return res.status(404).json({ message: 'Not found' })
            }
        }

        if (nombre) {
            console.log('get by nombre')
            if (!nombre) {
                console.log('distinto nombre')
                res.status(400).json({ message: 'Nombre is required' })
                return
            }

            if (typeof nombre !== 'string') {
                console.log('get by sring')
                return res.status(400).json({ message: 'Nombre format incorrect' })
            }

            const rol = await ServicesContainer.rol.getOneByNombre.execute(nombre)
            if (rol) {
                return res.status(200).json(rol.mapToDTO())
            } else {
                return res.status(404).json({ message: 'Not found' })
            }
        }

        console.log('get all')
        const roles = await ServicesContainer.rol.getAll.execute()
        return res.status(200).json(roles.map(rol => rol.mapToDTO()))

    }

}