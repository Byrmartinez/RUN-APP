import { Rol } from '../Domain/Rol'
import { RolId } from '../Domain/ValueObjects/RolId'
import { RolRepository } from '../Domain/RolRepository'

export class GetRolByIdUseCase {
    private repository: RolRepository

    constructor(RolRepository: RolRepository) {
        this.repository = RolRepository
    }

    async execute(id: string): Promise<Rol | null> {
        console.log('entrando a la ejecucion')
        // Usa el Value Object para manejar el ID de usuario
        const rolId = new RolId(id)
        console.log('manejando el id')

        // Retorna el usuario
        return await this.repository.getOneById(rolId)

    }
}