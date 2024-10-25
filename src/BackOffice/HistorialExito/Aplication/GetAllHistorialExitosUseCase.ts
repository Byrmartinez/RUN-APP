import { HistorialExito } from "../Domain/HistorialExito"
import { HistorialExitoRepository } from "../Domain/HistorialExitoRepository"

export class GetAllHistorialExitosUseCase {
    private repository: HistorialExitoRepository

    constructor(historialExitoRepository: HistorialExitoRepository) {
        this.repository = historialExitoRepository
    }

    // Retorna todos los usuarios desde el repositorio
    async execute(): Promise<HistorialExito[]> {
        return await this.repository.getAll()
    }
}
