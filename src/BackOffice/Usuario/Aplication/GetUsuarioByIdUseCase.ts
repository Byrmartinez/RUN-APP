import { Usuario } from '../Domain/Usuario'
import { UsuarioId } from '../Domain/ValueObjects/UsuarioId'
import { UsuarioRepository } from '../Domain/UsuarioRepository'

export class GetUsuarioByIdUseCase {
    private repository: UsuarioRepository

    constructor(UsuarioRepository: UsuarioRepository) {
        this.repository = UsuarioRepository
    }

    async execute(id: string): Promise<Usuario | null> {
        console.log('entrando a la ejecucion')
        // Usa el Value Object para manejar el ID de usuario
        const usuarioId = new UsuarioId(id)
        console.log('manejando el id')

        // Retorna el usuario
        return await this.repository.getOneById(usuarioId)

    }
}