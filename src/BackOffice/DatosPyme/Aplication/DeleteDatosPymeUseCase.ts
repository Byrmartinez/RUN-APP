import { IdDatosPyme } from "../Domain/ValueObjects/IdDatosPyme"
import { DatosPymeRepository } from "../Domain/DatosPymeRepository"

export class DeleteDatosPymeUseCase {
    private repository: DatosPymeRepository

    constructor(datosPymeRepository: DatosPymeRepository) {
        this.repository = datosPymeRepository
    }

    async execute(id: string): Promise<void> {
        // Usa el Value Object para validar el ID de usuario
        const datosPymeId = new IdDatosPyme(id)

        // Usa el repositorio para buscar el usuario
        const datosPyme = await this.repository.getOneById(datosPymeId)

        // Si el usuario no existe, lanza un error
        if (!datosPyme) throw new Error('DatosPyme no encontrado')

        // Elimina el usuario a través del repositorio
        await this.repository.delete(datosPymeId)
    }
}
