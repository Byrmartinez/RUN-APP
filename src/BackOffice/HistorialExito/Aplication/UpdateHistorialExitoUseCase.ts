import { HistorialExitoRepository } from '../Domain/HistorialExitoRepository'

import { HistorialExitoId } from '../Domain/ValueObjects/HistorialExitoId'
import { EnvioId } from '../Domain/ValueObjects/EnvioId'
import { UsuarioId } from '../Domain/ValueObjects/UsuarioId'
import { RiderId } from '../Domain/ValueObjects/RiderId'
import { Calificacion } from '../Domain/ValueObjects/Calificacion'
import { Comentario } from '../Domain/ValueObjects/Comentario'


export class UpdateHistorialExitoUseCase {
    private repository: HistorialExitoRepository

    constructor(historialExitoRepository: HistorialExitoRepository) {
        this.repository = historialExitoRepository
    }

    async execute(updateHistorialExitoDTO:
        {
            id: string,
            envioId?: string,
            usuarioId?: string,
            riderId?: string,
            calificacion?: number,
            comentario?: string
        }
    ): Promise<void> {

        // Extrae los valores del DTO
        const { id, envioId, usuarioId, riderId, calificacion, comentario } = updateHistorialExitoDTO

        // Usa el Value Object para validar el ID de usuario
        const historialExitoId = new HistorialExitoId(id)

        // Usa el repositorio para buscar el usuario
        const historialExito = await this.repository.getOneById(historialExitoId)

        // Si el usuario no existe, lanza un error
        if (!historialExito) throw new Error('HistorialExito no encontrado')

        // Actualiza los valores del usuario en memoria
        if (envioId) historialExito.envioId = new EnvioId(envioId)
        if (usuarioId) historialExito.usuarioId = new UsuarioId(usuarioId)
        if (riderId) historialExito.riderId = new RiderId(riderId)
        if (calificacion) historialExito.calificacion = new Calificacion(calificacion)
        if (comentario) historialExito.comentario = new Comentario(comentario)



        // Actualiza el usuario usando el repositorio
        return await this.repository.update(historialExito)
    }
}