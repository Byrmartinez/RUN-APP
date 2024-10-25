import { DatosRiderRepository } from '../Domain/DatosRiderRepository'
import { DatosRider } from '../Domain/DatosRider'
import { Patente } from '../Domain/ValueObjects/Patente'
import { DatosRiderAlreadyExists } from '../Domain/Exceptions/DatosRiderAlreadyExists'

export interface CreateDatosRiderDTO {
    idUsuario: string,
    tipoVehiculo: string,
    patente: string,
    modelo: string,
    saldo: number,
    deuda: number


}
console.log("oeee")

export class CreateDatosRiderUseCase {
    private repository: DatosRiderRepository

    constructor(datosRiderRepository: DatosRiderRepository) {
        this.repository = datosRiderRepository
    }

    // se recibe los datos primitivos
    async execute(createDatosRiderDTO: CreateDatosRiderDTO): Promise<DatosRider> {


        // Se extraen los valores del DTO
        const { idUsuario, tipoVehiculo, patente, modelo, saldo, deuda } = createDatosRiderDTO

        // Usa el repositorio para validar que el usuario no exista by email
        const datosRiderPatente = new Patente(patente)
        const datosRider = await this.repository.getOneByPatente(datosRiderPatente)

        // Si el usuario existe, lanza un error
        if (datosRider) throw new DatosRiderAlreadyExists()

        // Se utiliza un método estático de la entidad para crear una nueva instancia
        const newDatosRider = DatosRider.create(crypto.randomUUID(), idUsuario, tipoVehiculo, patente, modelo, saldo, deuda)

        // Se llama al repositorio para persistir el nuevo usuario
        await this.repository.create(newDatosRider)

        return newDatosRider
    }
}
