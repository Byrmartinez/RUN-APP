
import { DatosPymeRepository } from "../Domain/DatosPymeRepository"
import { Email } from "../Domain/ValueObjects/Email"
import { DatosPyme } from "../Domain/DatosPyme"

export class GetDatosPymeByEmailUseCase {
    private repository: DatosPymeRepository

    constructor(datosPymeRepository: DatosPymeRepository) {
        this.repository = datosPymeRepository
    }

    async execute(email: string): Promise<DatosPyme | null> {

        // Usa el Value Object para manejar el ID de usuario
        const datosPymeEmail = new Email(email)

        // Retorna el usuario
        return await this.repository.getOneByEmail(datosPymeEmail)
    }
}