import { DatosRiderRepository } from '../Domain/DatosRiderRepository'

import { IdDatosRider } from '../Domain/ValueObjects/IdDatosRider'
import { UsuarioId } from '../Domain/ValueObjects/UsuarioId'
import { TipoVehiculo } from '../Domain/ValueObjects/TipoVehiculo'
import { Patente } from '../Domain/ValueObjects/Patente'
import { Modelo } from '../Domain/ValueObjects/Modelo'
import { Saldo } from '../Domain/ValueObjects/Saldo'
import { Deuda } from '../Domain/ValueObjects/Deuda'

export class UpdateDatosRiderUseCase {
    private repository: DatosRiderRepository

    constructor(datosRiderRepository: DatosRiderRepository) {
        this.repository = datosRiderRepository
    }

    async execute(updateDatosRiderDTO:
        {
            id: string,
            idUsuario: string,
            tipoVehiculo?: string,
            patente?: string,
            modelo?: string,
            saldo?: number,
            deuda?: number
        }
    ): Promise<void> {

        // Extrae los valores del DTO
        const { id, idUsuario, tipoVehiculo, patente, modelo, saldo, deuda } = updateDatosRiderDTO

        // Usa el Value Object para validar el ID de usuario
        const datosRiderId = new IdDatosRider(id)

        // Usa el repositorio para buscar el usuario
        const datosRider = await this.repository.getOneById(datosRiderId)

        // Si el usuario no existe, lanza un error
        if (!datosRider) throw new Error('DatosRider no encontrado')

        // Actualiza los valores del usuario en memoria
        if (idUsuario) datosRider.idUsuario = new UsuarioId(idUsuario)
        if (tipoVehiculo) datosRider.tipoVehiculo = new TipoVehiculo(tipoVehiculo)
        if (patente) datosRider.patente = new Patente(patente)
        if (modelo) datosRider.modelo = new Modelo(modelo)
        if (saldo) datosRider.saldo = new Saldo(saldo)
        if (deuda) datosRider.deuda = new Deuda(deuda)

        // Actualiza el usuario usando el repositorio
        return await this.repository.update(datosRider)
    }
}