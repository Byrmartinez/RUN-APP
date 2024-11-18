import { EnvioRepository } from '../Domain/EnvioRepository'

import { EnvioId } from "../Domain/ValueObjects/EnvioId"
import { UsuarioId } from "../Domain/ValueObjects/UsuarioId"
import { RiderId } from '../Domain/ValueObjects/RiderId'
import { DireccionOrigen } from "../Domain/ValueObjects/DireccionOrigen"
import { DireccionDestino } from "../Domain/ValueObjects/DireccionDestino"
import { Descripcion } from "../Domain/ValueObjects/Descripcion"
import { DistanciaKM } from "../Domain/ValueObjects/DistanciaKM"
import { Estado } from "../Domain/ValueObjects/Estado"
import { TipoEnvio } from "../Domain/ValueObjects/TipoEnvio"
import { Costo } from "../Domain/ValueObjects/Costo"
import { ComisionAplicacion } from "../Domain/ValueObjects/ComisionAplicacion"
import { ComisionRider } from "../Domain/ValueObjects/ComisionRider"
import { ValorFinal } from "../Domain/ValueObjects/ValorFinal"




export class UpdateEnvioUseCase {
    private repository: EnvioRepository

    constructor(envioRepository: EnvioRepository) {
        this.repository = envioRepository
    }

    async execute(updateEnvioDTO:
        {
            id: string,
            usuarioId?: string,
            riderId?: string,
            direccionOrigen?: string,
            direccionDestino?: string,
            descripcion?: string,
            distanciaKM?: number,
            estado?: string,
            tipoEnvio?: string,
            costo?: number,
            comisionAplicacion?: number,
            comisionRider?: number,
            valorFinal?: number,

        }
    ): Promise<void> {

        // Extrae los valores del DTO
        const { id, usuarioId, riderId, direccionOrigen, direccionDestino, descripcion, distanciaKM,
            estado, tipoEnvio, costo, comisionAplicacion, comisionRider, valorFinal } = updateEnvioDTO

        // Usa el Value Object para validar el ID de usuario
        const envioId = new EnvioId(id)

        // Usa el repositorio para buscar el usuario
        const envio = await this.repository.getOneById(envioId)

        // Si el usuario no existe, lanza un error
        if (!envio) throw new Error('Envio no encontrado')

        // Actualiza los valores del usuario en memoria
        if (usuarioId) envio.usuarioId = new UsuarioId(usuarioId)
        if (riderId) envio.riderId = new RiderId(riderId)
        if (direccionOrigen) envio.direccionOrigen = new DireccionOrigen(direccionOrigen)
        if (direccionDestino) envio.direccionDestino = new DireccionDestino(direccionDestino)
        if (descripcion) envio.descripcion = new Descripcion(descripcion)
        if (distanciaKM) envio.distanciaKM = new DistanciaKM(distanciaKM)
        if (estado) envio.estado = new Estado(estado)
        if (tipoEnvio) envio.tipoEnvio = new TipoEnvio(tipoEnvio)
        if (costo) envio.costo = new Costo(costo)
        if (comisionAplicacion) envio.comisionAplicacion = new ComisionAplicacion(comisionAplicacion)
        if (comisionRider) envio.comisionRider = new ComisionRider(comisionRider)
        if (valorFinal) envio.valorFinal = new ValorFinal(valorFinal)


        // Actualiza el usuario usando el repositorio
        return await this.repository.update(envio)
    }
}