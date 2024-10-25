import { DatosPymeRepository } from '../Domain/DatosPymeRepository'

import { IdDatosPyme } from '../Domain/ValueObjects/IdDatosPyme'
import { UsuarioId } from '../Domain/ValueObjects/UsuarioId'
import { Nombre } from '../Domain/ValueObjects/Nombre'
import { Email } from '../Domain/ValueObjects/Email'
import { Plan } from '../Domain/ValueObjects/Plan'
import { Saldo } from '../Domain/ValueObjects/Saldo'
import { Deuda } from '../Domain/ValueObjects/Deuda'

export class UpdateDatosPymeUseCase {
    private repository: DatosPymeRepository

    constructor(datosPymeRepository: DatosPymeRepository) {
        this.repository = datosPymeRepository
    }

    async execute(updateDatosPymeDTO:
        {
            id: string,
            idUsuario: string,
            nombre?: string,
            email?: string,
            plan?: string,
            saldo?: number,
            deuda?: number
        }
    ): Promise<void> {

        // Extrae los valores del DTO
        const { id, idUsuario, nombre, email, plan, saldo, deuda } = updateDatosPymeDTO

        // Usa el Value Object para validar el ID de usuario
        const datosPymeId = new IdDatosPyme(id)

        // Usa el repositorio para buscar el usuario
        const datosPyme = await this.repository.getOneById(datosPymeId)

        // Si el usuario no existe, lanza un error
        if (!datosPyme) throw new Error('DatosPyme no encontrado')

        // Actualiza los valores del usuario en memoria
        if (idUsuario) datosPyme.idUsuario = new UsuarioId(idUsuario)
        if (nombre) datosPyme.nombre = new Nombre(nombre)
        if (email) datosPyme.email = new Email(email)
        if (plan) datosPyme.plan = new Plan(plan)
        if (saldo) datosPyme.saldo = new Saldo(saldo)
        if (deuda) datosPyme.deuda = new Deuda(deuda)

        // Actualiza el usuario usando el repositorio
        return await this.repository.update(datosPyme)
    }
}