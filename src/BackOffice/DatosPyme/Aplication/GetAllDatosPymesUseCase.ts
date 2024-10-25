import { DatosPyme } from "../Domain/DatosPyme"
import { DatosPymeRepository } from "../Domain/DatosPymeRepository"

export class GetAllDatosPymesUseCase {
    private repository: DatosPymeRepository

    constructor(datosPymeRepository: DatosPymeRepository) {
        this.repository = datosPymeRepository
    }

    // Retorna todos los usuarios desde el repositorio
    async execute(): Promise<DatosPyme[]> {
        return await this.repository.getAll()
    }
}
