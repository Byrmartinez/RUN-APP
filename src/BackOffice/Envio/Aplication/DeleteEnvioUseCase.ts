import { EnvioId } from "../Domain/ValueObjects/EnvioId"
import { EnvioRepository } from "../Domain/EnvioRepository"

export class DeleteEnvioUseCase {
    private repository: EnvioRepository

    constructor(envioRepository: EnvioRepository) {
        this.repository = envioRepository
    }

    async execute(id: string): Promise<void> {
        // Usa el Value Object para validar el ID de usuario
        const envioId = new EnvioId(id)

        // Usa el repositorio para buscar el usuario
        const envio = await this.repository.getOneById(envioId)

        // Si el usuario no existe, lanza un error
        if (!envio) throw new Error('Envio no encontrado')

        // Elimina el usuario a través del repositorio
        await this.repository.delete(envioId)
    }
}
