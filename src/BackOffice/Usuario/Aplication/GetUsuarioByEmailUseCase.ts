
import { UsuarioRepository } from "../Domain/UsuarioRepository"
import { Email } from "../Domain/ValueObjects/Email"
import { Usuario } from "../Domain/Usuario"

export class GetUsuarioByEmailUseCase {
    private repository: UsuarioRepository

    constructor(UsuarioRepository: UsuarioRepository) {
        this.repository = UsuarioRepository
    }

    async execute(email: string): Promise<Usuario | null> {

        // Usa el Value Object para manejar el ID de usuario
        const usuarioEmail = new Email(email)

        // Retorna el usuario
        return await this.repository.getOneByEmail(usuarioEmail)
    }
}