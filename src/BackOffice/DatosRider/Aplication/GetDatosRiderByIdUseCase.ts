import { DatosRider } from '../Domain/DatosRider'
import { IdDatosRider } from '../Domain/ValueObjects/IdDatosRider'
import { DatosRiderRepository } from '../Domain/DatosRiderRepository'

export class GetDatosRiderByIdUseCase {
    private repository: DatosRiderRepository

    constructor(datosRiderRepository: DatosRiderRepository) {
        this.repository = datosRiderRepository
    }

    async execute(id: string): Promise<DatosRider | null> {
        console.log('entrando a la ejecucion')
        // Usa el Value Object para manejar el ID de usuario
        const datosRiderId = new IdDatosRider(id)
        console.log('manejando el id')

        // Retorna el usuario
        return await this.repository.getOneById(datosRiderId)

    }
}