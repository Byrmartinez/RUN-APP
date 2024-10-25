import { Envio } from "../Domain/Envio"
import { EnvioRepository } from "../Domain/EnvioRepository"

export class GetAllEnviosUseCase {
    private repository: EnvioRepository

    constructor(envioRepository: EnvioRepository) {
        this.repository = envioRepository
    }

    // Retorna todos los usuarios desde el repositorio
    async execute(): Promise<Envio[]> {
        return await this.repository.getAll()
    }
}
