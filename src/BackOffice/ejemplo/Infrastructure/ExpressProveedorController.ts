import { NextFunction, Request, Response } from 'express'
import { CreateProveedorDTO } from '../Aplication/CreateProveedorUseCase'
import { ServicesContainer } from '../../../Shared/ServicesContainer'
import { ProveedorParametersNotValid } from '../Domain/Exceptions/ProveedorParameterNotValid'
import { ProveedorAlreadyExists } from '../Domain/Exceptions/ProveedorAlreadyExists'


export class ExpressProveedorController {

    async createProveedor(err: unknown, req: Request, res: Response, next: NextFunction) {

        try {
            const proveedor: CreateProveedorDTO = req.body
            const newProveedor = await ServicesContainer.proveedor.create.execute(proveedor)
            return res.status(201).json(newProveedor.mapToDTO())
        } catch (error) {
            if (error instanceof ProveedorParametersNotValid) {
                return res.status(400).json({ message: error.message })
            }

            if (error instanceof ProveedorAlreadyExists) {
                return res.status(400).json({ message: error.message })
            }

            throw error
        }
    }
}