import { Rol } from "../Domain/Rol"
import { RolRepository } from "../Domain/RolRepository"

export class GetAllRolesUseCase {
    private repository: RolRepository

    constructor(rolRepository: RolRepository) {
        this.repository = rolRepository
    }

    // Retorna todos los usuarios desde el repositorio
    async execute(): Promise<Rol[]> {
        return await this.repository.getAll()
    }
}
