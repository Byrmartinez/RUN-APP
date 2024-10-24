import { RolRepository } from '../Domain/RolRepository'

import { RolId } from '../Domain/ValueObjects/RolId'
import { Nombre } from '../Domain/ValueObjects/Nombre'
import { Descripcion } from '../Domain/ValueObjects/Descripcion'


export class UpdateRolUseCase {
    private repository: RolRepository

    constructor(rolRepository: RolRepository) {
        this.repository = rolRepository
    }

    async execute(updateRolDTO:
        {
            id: string,
            nombre?: string,
            descripcion?: string
        }
    ): Promise<void> {

        // Extrae los valores del DTO
        const { id, nombre, descripcion } = updateRolDTO

        // Usa el Value Object para validar el ID de usuario
        const rolId = new RolId(id)

        // Usa el repositorio para buscar el usuario
        const rol = await this.repository.getOneById(rolId)

        // Si el usuario no existe, lanza un error
        if (!rol) throw new Error('Rol no encontrado')

        // Actualiza los valores del usuario en memoria
        if (nombre) rol.nombre = new Nombre(nombre)
        if (descripcion) rol.descripcion = new Descripcion(descripcion)

        // Actualiza el usuario usando el repositorio
        return await this.repository.update(rol)
    }
}