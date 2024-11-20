import { Pool } from 'pg'

import { DatosPyme } from '../Domain/DatosPyme'
import { DatosPymeRepository } from '../Domain/DatosPymeRepository'
import { IdDatosPyme } from '../Domain/ValueObjects/IdDatosPyme'
import { Email } from '../Domain/ValueObjects/Email'


export class PostgresDatosPymeRepository implements DatosPymeRepository {

    client: Pool

    constructor(connectionData: any) {
        this.client = new Pool(connectionData)
    }

    async create(datosPyme: DatosPyme): Promise<DatosPyme> {
        const { id, idUsuario, nombre, email, plan, saldo, deuda } = datosPyme.mapToDTO()
        console.log("mapeando")
        console.log(datosPyme)

        const query = `
            INSERT INTO datos_pyme (id, id_usuario, nombre, email, plan, saldo, deuda)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `
        // const salt = await bcrypt.genSalt(10)
        //const hashedPassword = await bcrypt.hash(password, 10)

        const values = [id, idUsuario, nombre, email, plan, saldo, deuda]
        console.log("aquien el create de postgres")
        await this.client.query(query, values)
        return datosPyme
    }

    async getAll(): Promise<DatosPyme[]> {
        const query = 'SELECT * FROM datos_pyme'
        const result = await this.client.query(query)
        console.log(result)


        return result.rows.map((row) => {

            console.log("mapeandoooo")
            console.log("mapeandoooo")
            return DatosPyme.create(
                row.id,
                row.id_usuario,
                row.nombre,
                row.email,
                row.plan,
                row.saldo,
                row.deuda
            )

        })
    }

    async getOneById(id: IdDatosPyme): Promise<DatosPyme | null> {
        const query = 'SELECT * FROM datos_pyme WHERE id_usuario = $1'
        const result = await this.client.query(query, [id.value])
        console.log(result)
        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return DatosPyme.create(
            row.id,
            row.id_usuario,
            row.nombre,
            row.email,
            row.plan,
            row.saldo,
            row.deuda
        )
    }

    async getOneByEmail(email: Email): Promise<DatosPyme | null> {
        const query = 'SELECT * FROM datos_pyme WHERE email = $1'
        const result = await this.client.query(query, [email.value])

        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return DatosPyme.create(
            row.id,
            row.id_usuario,
            row.nombre,
            row.email,
            row.plan,
            row.saldo,
            row.deuda
        )
    }

    async update(datosPyme: DatosPyme): Promise<void> {
        const { id, idUsuario, nombre, email, plan, saldo, deuda } = datosPyme.mapToDTO()
        const query = `
            UPDATE datos_pyme
            SET id_usuario = $2 ,nombre = $3, email = $4, plan = $5, saldo = $6, deuda = $7
            WHERE id = $1
        `
        const values = [id, idUsuario, nombre, email, plan, saldo, deuda]
        await this.client.query(query, values)
    }

    async delete(id: IdDatosPyme): Promise<void> {
        const query = 'DELETE FROM datos_pyme WHERE id = $1'
        await this.client.query(query, [id.value])
    }
}