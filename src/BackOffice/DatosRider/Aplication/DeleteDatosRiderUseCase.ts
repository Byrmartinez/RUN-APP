import { IdDatosRider } from "../Domain/ValueObjects/IdDatosRider"
import { DatosRiderRepository } from "../Domain/DatosRiderRepository"

export class DeleteDatosRiderUseCase {
    private repository: DatosRiderRepository

    constructor(datosRiderRepository: DatosRiderRepository) {
        this.repository = datosRiderRepository
    }

    async execute(id: string): Promise<void> {
        // Usa el Value Object para validar el ID de usuario
        const datosRiderId = new IdDatosRider(id)

        // Usa el repositorio para buscar el usuario
        const datosRider = await this.repository.getOneById(datosRiderId)

        // Si el usuario no existe, lanza un error
        if (!datosRider) throw new Error('DatosRider no encontrado')

        // Elimina el usuario a través del repositorio
        await this.repository.delete(datosRiderId)
    }
}
