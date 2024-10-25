import { HistorialExito } from '../Domain/HistorialExito'
import { HistorialExitoId } from '../Domain/ValueObjects/HistorialExitoId'
import { HistorialExitoRepository } from '../Domain/HistorialExitoRepository'

export class GetHistorialExitoByIdUseCase {
    private repository: HistorialExitoRepository

    constructor(historialExitoRepository: HistorialExitoRepository) {
        this.repository = historialExitoRepository
    }

    async execute(id: string): Promise<HistorialExito | null> {
        console.log('entrando a la ejecucion')
        // Usa el Value Object para manejar el ID de usuario
        const historialExitoId = new HistorialExitoId(id)
        console.log('manejando el id')

        // Retorna el usuario
        return await this.repository.getOneById(historialExitoId)

    }
}