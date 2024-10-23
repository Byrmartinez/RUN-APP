import { UsuarioId } from "../Domain/ValueObjects/UsuarioId"
import { UsuarioRepository } from "../Domain/UsuarioRepository"

export class DeleteUsuarioUseCase {
    private repository: UsuarioRepository

    constructor(usuarioRepository: UsuarioRepository) {
        this.repository = usuarioRepository
    }

    async execute(id: string): Promise<void> {
        // Usa el Value Object para validar el ID de usuario
        const usuarioId = new UsuarioId(id)

        // Usa el repositorio para buscar el usuario
        const usuario = await this.repository.getOneById(usuarioId)

        // Si el usuario no existe, lanza un error
        if (!usuario) throw new Error('Usuario no encontrado')

        // Elimina el usuario a través del repositorio
        await this.repository.delete(usuarioId)
    }
}
