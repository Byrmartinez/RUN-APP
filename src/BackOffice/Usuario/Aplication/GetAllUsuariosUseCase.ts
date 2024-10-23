import { Usuario } from "../Domain/Usuario"
import { UsuarioRepository } from "../Domain/UsuarioRepository"

export class GetAllUsuariosUseCase {
    private repository: UsuarioRepository

    constructor(usuarioRepository: UsuarioRepository) {
        this.repository = usuarioRepository
    }

    // Retorna todos los usuarios desde el repositorio
    async execute(): Promise<Usuario[]> {
        return await this.repository.getAll()
    }
}
