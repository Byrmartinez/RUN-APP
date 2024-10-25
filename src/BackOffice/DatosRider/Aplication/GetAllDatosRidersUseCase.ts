import { DatosRider } from "../Domain/DatosRider"
import { DatosRiderRepository } from "../Domain/DatosRiderRepository"

export class GetAllDatosRidersUseCase {
    private repository: DatosRiderRepository

    constructor(datosRiderRepository: DatosRiderRepository) {
        this.repository = datosRiderRepository
    }

    // Retorna todos los usuarios desde el repositorio
    async execute(): Promise<DatosRider[]> {
        return await this.repository.getAll()
    }
}
