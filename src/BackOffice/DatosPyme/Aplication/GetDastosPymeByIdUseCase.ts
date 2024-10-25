import { DatosPyme } from '../Domain/DatosPyme'
import { IdDatosPyme } from '../Domain/ValueObjects/IdDatosPyme'
import { DatosPymeRepository } from '../Domain/DatosPymeRepository'

export class GetDatosPymeByIdUseCase {
    private repository: DatosPymeRepository

    constructor(datosPymeRepository: DatosPymeRepository) {
        this.repository = datosPymeRepository
    }

    async execute(id: string): Promise<DatosPyme | null> {
        console.log('entrando a la ejecucion')
        // Usa el Value Object para manejar el ID de usuario
        const idDatosPyme = new IdDatosPyme(id)
        console.log('manejando el id')

        // Retorna el usuario
        return await this.repository.getOneById(idDatosPyme)

    }
}