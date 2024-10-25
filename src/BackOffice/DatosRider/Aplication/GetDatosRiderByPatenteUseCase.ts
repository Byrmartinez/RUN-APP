
import { DatosRiderRepository } from "../Domain/DatosRiderRepository"
import { Patente } from "../Domain/ValueObjects/Patente"
import { DatosRider } from "../Domain/DatosRider"

export class GetDatosRiderByPatenteUseCase {
    private repository: DatosRiderRepository

    constructor(datosRiderRepository: DatosRiderRepository) {
        this.repository = datosRiderRepository
    }

    async execute(patente: string): Promise<DatosRider | null> {

        // Usa el Value Object para manejar el ID de usuario
        const datosRiderPatente = new Patente(patente)

        // Retorna el usuario
        return await this.repository.getOneByPatente(datosRiderPatente)
    }
}