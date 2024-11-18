import { HistorialExitoRepository } from '../Domain/HistorialExitoRepository'
import { HistorialExito } from '../Domain/HistorialExito'
import { HistorialExitoAlreadyExists } from '../Domain/Exceptions/HistorialExitoAlreadyExists'

export interface CreateHistorialExitoDTO {

    envioId: string,
    usuarioId: string,
    riderId: string,
    calificacion: number,
    comentario: string,



}
console.log("oeee")

export class CreateHistorialExitoUseCase {
    private repository: HistorialExitoRepository

    constructor(historialExitoRepository: HistorialExitoRepository) {
        this.repository = historialExitoRepository
    }

    // se recibe los datos primitivos
    async execute(createHistorialExitoDTO: CreateHistorialExitoDTO): Promise<HistorialExito> {


        // Se extraen los valores del DTO
        const { envioId, usuarioId, riderId, calificacion, comentario } = createHistorialExitoDTO


        // Se utiliza un método estático de la entidad para crear una nueva instancia
        const newHistorialExito = HistorialExito.create(crypto.randomUUID(), envioId, usuarioId, riderId, calificacion, comentario, new Date())

        // Se llama al repositorio para persistir el nuevo usuario
        await this.repository.create(newHistorialExito)

        return newHistorialExito
    }
}
