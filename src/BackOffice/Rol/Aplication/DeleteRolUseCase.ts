import { RolId } from "../Domain/ValueObjects/RolId"
import { RolRepository } from "../Domain/RolRepository"

export class DeleteRolUseCase {
    private repository: RolRepository

    constructor(rolRepository: RolRepository) {
        this.repository = rolRepository
    }

    async execute(id: string): Promise<void> {
        // Usa el Value Object para validar el ID de usuario
        const rolId = new RolId(id)

        // Usa el repositorio para buscar el usuario
        const rol = await this.repository.getOneById(rolId)

        // Si el usuario no existe, lanza un error
        if (!rol) throw new Error('Rol no encontrado')

        // Elimina el usuario a través del repositorio
        await this.repository.delete(rolId)
    }
}
