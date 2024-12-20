import { NextFunction, Request, Response } from 'express'
import { CreateUsuarioDTO } from '../Aplication/CreateUsuarioUseCase'
import { ServicesContainer } from '../../Shared/ServiceContainer'
import { UsuarioParametersNotValid } from '../Domain/Exceptions/UsuarioParameterNotValid'
import { UsuarioAlreadyExists } from '../Domain/Exceptions/UsuarioAlreadyExists'
import { Email } from '../Domain/ValueObjects/Email'

export class ExpressUsuarioController {

    async createUsuario(req: Request, res: Response, next: NextFunction) {

        try {
            console.log('en el try')
            const usuario: CreateUsuarioDTO = req.body
            const newUsuario = await ServicesContainer.usuario.create.execute(usuario)
            return res.status(201).json(newUsuario.mapToDTO())
        } catch (error) {
            /*if (error instanceof UsuarioParametersNotValid) {
                return res.status(400).json({ message: error.message })
            }*/

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
            const usuario = await ServicesContainer.usuario.getOneById.execute(id)
            if (usuario) {
                console.log('llendo a mapear usuario')
                return res.status(200).json(usuario.mapToDTO())
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
    async loginUsuario(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: 'Email y password son requeridos' });
            }

            // Llamada al servicio de autenticación
            const usuario = await ServicesContainer.usuario.authenticate.execute(new Email(email).value, password);

            if (usuario) {
                console.log(usuario)
                console.log(`Estado del usuario: ${usuario.estado}`)
                console.log('Usuario completo:', usuario);
                if (String(usuario.estado.value) === "activo") {

                    return res.status(200).json(usuario.mapToDTO());
                } else {
                    console.log(String(usuario.estado))
                    return res.status(403).json({ message: 'Usuario inactivo' });
                }
            } else {
                return res.status(401).json({ message: 'Credenciales incorrectas' });
            }
        } catch (error) {
            console.error('Error en el login:', error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

}