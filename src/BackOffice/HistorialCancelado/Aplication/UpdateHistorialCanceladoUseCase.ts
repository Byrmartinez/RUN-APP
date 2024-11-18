import { HistorialCanceladoRepository } from '../Domain/HistorialCanceladoRepository'

import { HistorialCanceladoId } from '../Domain/ValueObjects/HistorialCanceladoId'
import { EnvioId } from '../Domain/ValueObjects/EnvioId'
import { UsuarioId } from '../Domain/ValueObjects/UsuarioId'
import { RiderId } from '../Domain/ValueObjects/RiderId'
import { MotivoCancelacionRider } from '../Domain/ValueObjects/MotivoCancelacionRider'
import { MotivoCancelacionGenerador } from '../Domain/ValueObjects/MotivoCancelacionGenerador'



export class UpdateHistorialCanceladoUseCase {
    private repository: HistorialCanceladoRepository

    constructor(historialCanceladoRepository: HistorialCanceladoRepository) {
        this.repository = historialCanceladoRepository
    }

    async execute(updateHistorialCanceladoDTO:
        {
            id: string,
            envioId?: string,
            usuarioId?: string,
            riderId?: string,
            motivoCancelacionRider?: string,
            motivoCancelacionGenerador?: string
        }
    ): Promise<void> {

        // Extrae los valores del DTO
        const { id, envioId, usuarioId, riderId, motivoCancelacionRider, motivoCancelacionGenerador } = updateHistorialCanceladoDTO

        // Usa el Value Object para validar el ID de usuario
        const historialCanceladoId = new HistorialCanceladoId(id)

        // Usa el repositorio para buscar el usuario
        const historialCancelado = await this.repository.getOneById(historialCanceladoId)

        // Si el usuario no existe, lanza un error
        if (!historialCancelado) throw new Error('HistorialCancelado no encontrado')

        // Actualiza los valores del usuario en memoria
        if (envioId) historialCancelado.envioId = new EnvioId(envioId)
        if (usuarioId) historialCancelado.usuarioId = new UsuarioId(usuarioId)
        if (riderId) historialCancelado.riderId = new RiderId(riderId)
        if (motivoCancelacionRider) historialCancelado.motivoCancelacionRider = new MotivoCancelacionRider(motivoCancelacionRider)
        if (motivoCancelacionGenerador) historialCancelado.motivoCancelacionGenerador = new MotivoCancelacionGenerador(motivoCancelacionGenerador)



        // Actualiza el usuario usando el repositorio
        return await this.repository.update(historialCancelado)
    }
}