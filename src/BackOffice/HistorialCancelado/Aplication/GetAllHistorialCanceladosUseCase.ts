import { HistorialCancelado } from "../Domain/HistorialCancelado"
import { HistorialCanceladoRepository } from "../Domain/HistorialCanceladoRepository"

export class GetAllHistorialCanceladosUseCase {
    private repository: HistorialCanceladoRepository

    constructor(historialCanceladoRepository: HistorialCanceladoRepository) {
        this.repository = historialCanceladoRepository
    }

    // Retorna todos los usuarios desde el repositorio
    async execute(): Promise<HistorialCancelado[]> {
        return await this.repository.getAll()
    }
}
