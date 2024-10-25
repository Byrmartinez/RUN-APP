import { DatosPymeRepository } from '../Domain/DatosPymeRepository'
import { DatosPyme } from '../Domain/DatosPyme'
import { Email } from '../Domain/ValueObjects/Email'
import { DatosPymeAlreadyExists } from '../Domain/Exceptions/DatosPymeAlreadyExists'

export interface CreateDatosPymeDTO {
    idUsuario: string,
    nombre: string,
    email: string,
    plan: string,
    saldo: number,
    deuda: number


}
console.log("oeee")

export class CreateDatosPymeUseCase {
    private repository: DatosPymeRepository

    constructor(datosPymeRepository: DatosPymeRepository) {
        this.repository = datosPymeRepository
    }

    // se recibe los datos primitivos
    async execute(createDatosPymeDTO: CreateDatosPymeDTO): Promise<DatosPyme> {


        // Se extraen los valores del DTO
        const { idUsuario, nombre, email, plan, saldo, deuda } = createDatosPymeDTO

        // Usa el repositorio para validar que el usuario no exista by email
        const datosPymeEmail = new Email(email)
        const datosPyme = await this.repository.getOneByEmail(datosPymeEmail)

        // Si el usuario existe, lanza un error
        if (datosPyme) throw new DatosPymeAlreadyExists()

        // Se utiliza un método estático de la entidad para crear una nueva instancia
        const newDatosPyme = DatosPyme.create(crypto.randomUUID(), idUsuario, nombre, email, plan, saldo, deuda)

        // Se llama al repositorio para persistir el nuevo usuario
        await this.repository.create(newDatosPyme)

        return newDatosPyme
    }
}
