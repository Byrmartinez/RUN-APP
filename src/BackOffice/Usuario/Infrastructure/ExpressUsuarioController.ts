import { NextFunction, Request, Response } from 'express'
import { CreateUsuarioDTO } from '../Aplication/CreateUsuarioUseCase'
import { ServicesContainer } from '../../Shared/ServiceContainer'
import { UsuarioParametersNotValid } from '../Domain/Exceptions/UsuarioParameterNotValid'
import { UsuarioAlreadyExists } from '../Domain/Exceptions/UsuarioAlreadyExists'


export class ExpressUsuarioController {

    async createUsuario(err: unknown, req: Request, res: Response, next: NextFunction) {

        try {
            const usuario: CreateUsuarioDTO = req.body
            const newUsuario = await ServicesContainer.usuario.create.execute(usuario)
            return res.status(201).json(newUsuario.mapToDTO())
        } catch (error) {
            if (error instanceof UsuarioParametersNotValid) {
                return res.status(400).json({ message: error.message })
            }

            if (error instanceof UsuarioAlreadyExists) {
                return res.status(400).json({ message: error.message })
            }

            throw error
        }
    }
    async updateUsuario(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.usuario.update.execute(req.body)
        return res.status(204).json()
    }

    async deleteUsuario(req: Request, res: Response, next: NextFunction) {
        await ServicesContainer.usuario.delete.execute(req.params.id)
        return res.status(204).json()
    }

    async getUsuarios(req: Request, res: Response, next: NextFunction) {

        const { id, email } = req.query

        if (id) {
            console.log('get by id')
            if (!id) {
                res.status(400).json({ message: 'Id is required' })
                return
            }

            if (typeof id !== 'string') {
                return res.status(400).json({ message: 'Id format incorrect' })
            }

            const user = await ServicesContainer.usuario.getOneById.execute(id)
            if (user) {
                return res.status(200).json(user.mapToDTO())
            } else {
                return res.status(404).json({ message: 'Not found' })
            }
        }

        if (email) {
            console.log('get by email')
            if (!email) {
                res.status(400).json({ message: 'Email is required' })
                return
            }

            if (typeof email !== 'string') {
                return res.status(400).json({ message: 'Email format incorrect' })
            }

            const usuario = await ServicesContainer.usuario.getOneByEmail.execute(email)
            if (usuario) {
                return res.status(200).json(usuario.mapToDTO())
            } else {
                return res.status(404).json({ message: 'Not found' })
            }
        }

        console.log('get all')
        const usuarios = await ServicesContainer.usuario.getAll.execute()
        return res.status(200).json(usuarios.map(usuario => usuario.mapToDTO()))

    }

}