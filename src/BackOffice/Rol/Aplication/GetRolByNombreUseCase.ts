
import { RolRepository } from "../Domain/RolRepository"
import { Nombre } from "../Domain/ValueObjects/Nombre"
import { Rol } from "../Domain/Rol"

export class GetRolByNombreUseCase {
    private repository: RolRepository

    constructor(RolRepository: RolRepository) {
        this.repository = RolRepository
    }

    async execute(nombre: string): Promise<Rol | null> {

        // Usa el Value Object para manejar el ID de usuario
        const rolNombre = new Nombre(nombre)

        // Retorna el usuario
        return await this.repository.getOneByNombre(rolNombre)
    }
}