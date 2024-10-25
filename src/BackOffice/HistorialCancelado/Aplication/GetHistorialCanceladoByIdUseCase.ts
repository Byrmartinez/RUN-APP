import { HistorialCancelado } from '../Domain/HistorialCancelado'
import { HistorialCanceladoId } from '../Domain/ValueObjects/HistorialCanceladoId'
import { HistorialCanceladoRepository } from '../Domain/HistorialCanceladoRepository'

export class GetHistorialCanceladoByIdUseCase {
    private repository: HistorialCanceladoRepository

    constructor(historialCanceladoRepository: HistorialCanceladoRepository) {
        this.repository = historialCanceladoRepository
    }

    async execute(id: string): Promise<HistorialCancelado | null> {
        console.log('entrando a la ejecucion')
        // Usa el Value Object para manejar el ID de usuario
        const historialCanceladoId = new HistorialCanceladoId(id)
        console.log('manejando el id')

        // Retorna el usuario
        return await this.repository.getOneById(historialCanceladoId)

    }
}