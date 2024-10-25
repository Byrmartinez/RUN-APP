import { Envio } from '../Domain/Envio'
import { EnvioId } from '../Domain/ValueObjects/EnvioId'
import { EnvioRepository } from '../Domain/EnvioRepository'

export class GetEnvioByIdUseCase {
    private repository: EnvioRepository

    constructor(envioRepository: EnvioRepository) {
        this.repository = envioRepository
    }

    async execute(id: string): Promise<Envio | null> {
        console.log('entrando a la ejecucion')
        // Usa el Value Object para manejar el ID
        const envioId = new EnvioId(id)
        console.log('manejando el id')

        // Retorna el usuario
        return await this.repository.getOneById(envioId)

    }
}