import { Pool } from 'pg'

import { Envio } from '../Domain/Envio'
import { EnvioRepository } from '../Domain/EnvioRepository'
import { EnvioId } from '../Domain/ValueObjects/EnvioId'



export class PostgresEnvioRepository implements EnvioRepository {

    client: Pool

    constructor(connectionData: any) {
        this.client = new Pool(connectionData)
    }

    async create(envio: Envio): Promise<Envio> {
        const { id, usuarioId, direccionOrigen, direccionDestino, descripcion, distanciaKM,
            estado, tipoEnvio, costo, comisionAplicacion, comisionRider, valorFinal, fechaEnvio } = envio.mapToDTO()


        const query = `
            INSERT INTO envio (id, id_usuario, direccion_origen, direccion_destino, descripcion, distancia_km, estado, tipo_envio, costo, comision_aplicacion, comision_rider, valor_final, fecha_envio )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        `
        // const salt = await bcrypt.genSalt(10)
        //const hashedPassword = await bcrypt.hash(password, 10)

        const values = [id, usuarioId, direccionOrigen, direccionDestino, descripcion, distanciaKM,
            estado, tipoEnvio, costo, comisionAplicacion, comisionRider, valorFinal, fechaEnvio]
        await this.client.query(query, values)
        return envio
    }

    async getAll(): Promise<Envio[]> {
        const query = 'SELECT * FROM envio'
        const result = await this.client.query(query)
        console.log(result)


        return result.rows.map((row) => {

            console.log("mapeandoooo")
            console.log("mapeandoooo")
            return Envio.create(
                row.id,
                row.id_usuario,
                row.direccion_origen,
                row.direccion_destino,
                row.descripcion,
                row.distancia_km,
                row.estado,
                row.tipo_envio,
                row.costo,
                row.comision_aplicacion,
                row.comision_rider,
                row.valor_final,
                row.fecha_envio
            )

        })
    }

    async getOneById(id: EnvioId): Promise<Envio | null> {
        const query = 'SELECT * FROM envio WHERE id = $1'
        const result = await this.client.query(query, [id.value])
        console.log(result)
        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return Envio.create(
            row.id,
            row.id_usuario,
            row.direccion_origen,
            row.direccion_destino,
            row.descripcion,
            row.distancia_km,
            row.estado,
            row.tipo_envio,
            row.costo,
            row.comision_aplicacion,
            row.comision_rider,
            row.valor_final,
            row.fecha_envio
        )
    }



    async update(envio: Envio): Promise<void> {
        const { id, usuarioId, direccionOrigen, direccionDestino, descripcion, distanciaKM,
            estado, tipoEnvio, costo, comisionAplicacion, comisionRider, valorFinal, fechaEnvio } = envio.mapToDTO()
        const query = `
            UPDATE envio
            SET id_usuario = $2, direccion_origen = $3, direccion_destino = $4, descripcion = $5, distancia_km = $6, estado = $7, tipo_envio = $8, costo = $9, comision_aplicacion = $10, comision_rider =$11, valor_final =$12, fecha_envio =$13
            WHERE id = $1
        `
        const values = [id, usuarioId, direccionOrigen, direccionDestino, descripcion, distanciaKM,
            estado, tipoEnvio, costo, comisionAplicacion, comisionRider, valorFinal, fechaEnvio]
        await this.client.query(query, values)
    }

    async delete(id: EnvioId): Promise<void> {
        const query = 'DELETE FROM envio WHERE id = $1'
        await this.client.query(query, [id.value])
    }
}