import { EnvioRepository } from '../Domain/EnvioRepository'
import { Envio } from '../Domain/Envio'
import { EnvioAlreadyExists } from '../Domain/Exceptions/EnvioAlreadyExists'

export interface CreateEnvioDTO {

    usuarioId: string,
    riderId: string,
    direccionOrigen: string,
    direccionDestino: string,
    descripcion: string,
    distanciaKM: number,
    estado: string,
    tipoEnvio: string,
    costo: number,
    comisionAplicacion: number,
    comisionRider: number,
    valorFinal: number,


}
console.log("oeee")

export class CreateEnvioUseCase {
    private repository: EnvioRepository

    constructor(envioRepository: EnvioRepository) {
        this.repository = envioRepository
    }

    // se recibe los datos primitivos
    async execute(createEnvioDTO: CreateEnvioDTO): Promise<Envio> {


        // Se extraen los valores del DTO
        const { usuarioId, riderId, direccionOrigen, direccionDestino, descripcion, distanciaKM,
            estado, tipoEnvio, costo, comisionAplicacion, comisionRider, valorFinal } = createEnvioDTO


        // Se utiliza un método estático de la entidad para crear una nueva instancia
        const newEnvio = Envio.create(crypto.randomUUID(), usuarioId, riderId, direccionOrigen, direccionDestino, descripcion, distanciaKM,
            estado, tipoEnvio, costo, comisionAplicacion, comisionRider, valorFinal,
            new Date())

        // Se llama al repositorio para persistir el nuevo usuario
        await this.repository.create(newEnvio)

        return newEnvio
    }
}
