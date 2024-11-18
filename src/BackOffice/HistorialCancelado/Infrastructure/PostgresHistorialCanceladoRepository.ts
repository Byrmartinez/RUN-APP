import { Pool } from 'pg'

import { HistorialCancelado } from '../Domain/HistorialCancelado'
import { HistorialCanceladoRepository } from '../Domain/HistorialCanceladoRepository'
import { HistorialCanceladoId } from '../Domain/ValueObjects/HistorialCanceladoId'



export class PostgresHistorialCanceladoRepository implements HistorialCanceladoRepository {

    client: Pool

    constructor(connectionData: any) {
        this.client = new Pool(connectionData)
    }

    async create(historialCancelado: HistorialCancelado): Promise<HistorialCancelado> {
        const { id, envioId, usuarioId, riderId, motivoCancelacionRider, motivoCancelacionGenerador, fechaCancelacion } = historialCancelado.mapToDTO()


        const query = `
            INSERT INTO historial_cancelado (id, id_envio, id_usuario, id_rider, motivo_cancelacion_rider, motivo_cancelacion_generador, fecha_cancelacion )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `
        // const salt = await bcrypt.genSalt(10)
        //const hashedPassword = await bcrypt.hash(password, 10)

        const values = [id, envioId, usuarioId, riderId, motivoCancelacionRider, motivoCancelacionGenerador, fechaCancelacion]
        await this.client.query(query, values)
        return historialCancelado
    }

    async getAll(): Promise<HistorialCancelado[]> {
        const query = 'SELECT * FROM historial_cancelado'
        const result = await this.client.query(query)
        console.log(result)


        return result.rows.map((row) => {

            console.log("mapeandoooo")
            return HistorialCancelado.create(
                row.id,
                row.id_envio,
                row.id_usuario,
                row.id_rider,
                row.motivo_cancelacion_rider,
                row.motivo_cancelacion_generador,
                row.fecha_cancelacion
            )

        })
    }

    async getOneById(id: HistorialCanceladoId): Promise<HistorialCancelado | null> {
        const query = 'SELECT * FROM historial_cancelado WHERE id = $1'
        const result = await this.client.query(query, [id.value])
        console.log(result)
        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return HistorialCancelado.create(
            row.id,
            row.id_envio,
            row.id_usuario,
            row.id_rider,
            row.motivo_cancelacion_rider,
            row.motivo_cancelacion_generador,
            row.fecha_cancelacion
        )
    }



    async update(historialCancelado: HistorialCancelado): Promise<void> {
        const { id, envioId, usuarioId, riderId, motivoCancelacionRider, motivoCancelacionGenerador, fechaCancelacion } = historialCancelado.mapToDTO()
        const query = `
            UPDATE historial_cancelado
            SET id_envio = $2, id_usuario= $3, id_rider = $4, motivo_cancelacion_rider = $5, motivo_cancelacion_generador = $6, fecha_cancelacion = $7
            WHERE id = $1
        `
        const values = [id, envioId, usuarioId, riderId, motivoCancelacionRider, motivoCancelacionGenerador, fechaCancelacion]
        await this.client.query(query, values)
    }

    async delete(id: HistorialCanceladoId): Promise<void> {
        const query = 'DELETE FROM historial_cancelado WHERE id = $1'
        await this.client.query(query, [id.value])
    }
}