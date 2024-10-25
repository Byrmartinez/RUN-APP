import { HistorialExitoId } from "../Domain/ValueObjects/HistorialExitoId"
import { HistorialExitoRepository } from "../Domain/HistorialExitoRepository"

export class DeleteHistorialExitoUseCase {
    private repository: HistorialExitoRepository

    constructor(historialExitoRepository: HistorialExitoRepository) {
        this.repository = historialExitoRepository
    }

    async execute(id: string): Promise<void> {
        // Usa el Value Object para validar el ID de usuario
        const historialExitoId = new HistorialExitoId(id)

        // Usa el repositorio para buscar el usuario
        const historialExito = await this.repository.getOneById(historialExitoId)

        // Si el usuario no existe, lanza un error
        if (!historialExito) throw new Error('HistorialExito no encontrado')

        // Elimina el usuario a través del repositorio
        await this.repository.delete(historialExitoId)
    }
}
