import { Pool } from 'pg'

import { HistorialExito } from '../Domain/HistorialExito'
import { HistorialExitoRepository } from '../Domain/HistorialExitoRepository'
import { HistorialExitoId } from '../Domain/ValueObjects/HistorialExitoId'



export class PostgresHistorialExitoRepository implements HistorialExitoRepository {

    client: Pool

    constructor(connectionData: any) {
        this.client = new Pool(connectionData)
    }

    async create(historialExito: HistorialExito): Promise<HistorialExito> {
        const { id, envioId, riderId, calificacion, comentario, fechaEntrega } = historialExito.mapToDTO()


        const query = `
            INSERT INTO historial_exito (id, id_envio, id_rider, calificacion, comentario, fecha_entrega )
            VALUES ($1, $2, $3, $4, $5, $6)
        `
        // const salt = await bcrypt.genSalt(10)
        //const hashedPassword = await bcrypt.hash(password, 10)

        const values = [id, envioId, riderId, calificacion, comentario, fechaEntrega]
        await this.client.query(query, values)
        return historialExito
    }

    async getAll(): Promise<HistorialExito[]> {
        const query = 'SELECT * FROM historial_exito'
        const result = await this.client.query(query)
        console.log(result)


        return result.rows.map((row) => {

            console.log("mapeandoooo")
            return HistorialExito.create(
                row.id,
                row.id_envio,
                row.id_rider,
                row.calificacion,
                row.comentario,
                row.fecha_entrega
            )

        })
    }

    async getOneById(id: HistorialExitoId): Promise<HistorialExito | null> {
        const query = 'SELECT * FROM historial_exito WHERE id = $1'
        const result = await this.client.query(query, [id.value])
        console.log(result)
        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return HistorialExito.create(
            row.id,
            row.id_envio,
            row.id_rider,
            row.calificacion,
            row.comentario,
            row.fecha_entrega
        )
    }



    async update(historialExito: HistorialExito): Promise<void> {
        const { id, envioId, riderId, calificacion, comentario, fechaEntrega } = historialExito.mapToDTO()
        const query = `
            UPDATE historial_exito
            SET id_envio = $2, id_rider = $3, calificacion = $4, comentario = $5, fecha_entrega = $6
            WHERE id = $1
        `
        const values = [id, envioId, riderId, calificacion, comentario, fechaEntrega]
        await this.client.query(query, values)
    }

    async delete(id: HistorialExitoId): Promise<void> {
        const query = 'DELETE FROM historial_exito WHERE id = $1'
        await this.client.query(query, [id.value])
    }
}