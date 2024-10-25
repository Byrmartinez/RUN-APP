import { Pool } from 'pg'

import { DatosRider } from '../Domain/DatosRider'
import { DatosRiderRepository } from '../Domain/DatosRiderRepository'
import { IdDatosRider } from '../Domain/ValueObjects/IdDatosRider'
import { Patente } from '../Domain/ValueObjects/Patente'


export class PostgresDatosRiderRepository implements DatosRiderRepository {

    client: Pool

    constructor(connectionData: any) {
        this.client = new Pool(connectionData)
    }

    async create(datosRider: DatosRider): Promise<DatosRider> {
        const { id, idUsuario, tipoVehiculo, patente, modelo, saldo, deuda } = datosRider.mapToDTO()


        const query = `
            INSERT INTO datos_rider (id, id_usuario, tipo_vehiculo, patente, modelo, saldo, deuda )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `
        // const salt = await bcrypt.genSalt(10)
        //const hashedPassword = await bcrypt.hash(password, 10)

        const values = [id, idUsuario, tipoVehiculo, patente, modelo, saldo, deuda]
        await this.client.query(query, values)
        return datosRider
    }

    async getAll(): Promise<DatosRider[]> {
        const query = 'SELECT * FROM datos_rider'
        const result = await this.client.query(query)
        console.log(result)


        return result.rows.map((row) => {

            console.log("mapeandoooo")
            console.log("mapeandoooo")
            return DatosRider.create(
                row.id,
                row.id_usuario,
                row.tipo_vehiculo,
                row.patente,
                row.modelo,
                row.saldo,
                row.deuda
            )

        })
    }

    async getOneById(id: IdDatosRider): Promise<DatosRider | null> {
        const query = 'SELECT * FROM datos_rider WHERE id = $1'
        const result = await this.client.query(query, [id.value])
        console.log(result)
        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return DatosRider.create(
            row.id,
            row.id_usuario,
            row.tipo_vehiculo,
            row.patente,
            row.modelo,
            row.saldo,
            row.deuda
        )
    }

    async getOneByPatente(patente: Patente): Promise<DatosRider | null> {
        const query = 'SELECT * FROM datos_rider WHERE patente = $1'
        const result = await this.client.query(query, [patente.value])

        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return DatosRider.create(
            row.id,
            row.id_usuario,
            row.tipo_vehiculo,
            row.patente,
            row.modelo,
            row.saldo,
            row.deuda
        )
    }

    async update(datosRider: DatosRider): Promise<void> {
        const { id, idUsuario, tipoVehiculo, patente, modelo, saldo, deuda } = datosRider.mapToDTO()
        const query = `
            UPDATE datos_rider
            SET id_usuario = $2 ,tipo_vehiculo = $3, patente = $4, modelo = $5, saldo = $6, deuda = $7
            WHERE id = $1
        `
        const values = [id, idUsuario, tipoVehiculo, patente, modelo, saldo, deuda]
        await this.client.query(query, values)
    }

    async delete(id: IdDatosRider): Promise<void> {
        const query = 'DELETE FROM datos_rider WHERE id = $1'
        await this.client.query(query, [id.value])
    }
}