import { HistorialCanceladoId } from "../Domain/ValueObjects/HistorialCanceladoId"
import { HistorialCanceladoRepository } from "../Domain/HistorialCanceladoRepository"

export class DeleteHistorialCanceladoUseCase {
    private repository: HistorialCanceladoRepository

    constructor(historialCanceladoRepository: HistorialCanceladoRepository) {
        this.repository = historialCanceladoRepository
    }

    async execute(id: string): Promise<void> {
        // Usa el Value Object para validar el ID de usuario
        const historialCanceladoId = new HistorialCanceladoId(id)

        // Usa el repositorio para buscar el usuario
        const historialCancelado = await this.repository.getOneById(historialCanceladoId)

        // Si el usuario no existe, lanza un error
        if (!historialCancelado) throw new Error('HistorialCancelado no encontrado')

        // Elimina el usuario a través del repositorio
        await this.repository.delete(historialCanceladoId)
    }
}
