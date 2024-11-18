import { HistorialCanceladoRepository } from '../Domain/HistorialCanceladoRepository'
import { HistorialCancelado } from '../Domain/HistorialCancelado'
import { HistorialCanceladoAlreadyExists } from '../Domain/Exceptions/HistorialCanceladoAlreadyExists'

export interface CreateHistorialCanceladoDTO {

    envioId: string,
    usuarioId: string,
    riderId: string,
    motivoCancelacionRider: string,
    motivoCancelacionGenerador: string,



}
console.log("oeee")

export class CreateHistorialCanceladoUseCase {
    private repository: HistorialCanceladoRepository

    constructor(historialCanceladoRepository: HistorialCanceladoRepository) {
        this.repository = historialCanceladoRepository
    }

    // se recibe los datos primitivos
    async execute(createHistorialCanceladoDTO: CreateHistorialCanceladoDTO): Promise<HistorialCancelado> {


        // Se extraen los valores del DTO
        const { envioId, usuarioId, riderId, motivoCancelacionRider, motivoCancelacionGenerador } = createHistorialCanceladoDTO


        // Se utiliza un método estático de la entidad para crear una nueva instancia
        const newHistorialCancelado = HistorialCancelado.create(crypto.randomUUID(), envioId, usuarioId, riderId, motivoCancelacionRider, motivoCancelacionGenerador, new Date())

        // Se llama al repositorio para persistir el nuevo usuario
        await this.repository.create(newHistorialCancelado)

        return newHistorialCancelado
    }
}
