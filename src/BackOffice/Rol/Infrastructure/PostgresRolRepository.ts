import { Pool } from 'pg'

import { Rol } from '../Domain/Rol'
import { RolRepository } from '../Domain/RolRepository'
import { RolId } from '../Domain/ValueObjects/RolId'
import { Nombre } from '../Domain/ValueObjects/Nombre'


export class PostgresRolRepository implements RolRepository {

    client: Pool

    constructor(connectionData: any) {
        this.client = new Pool(connectionData)
    }

    async create(rol: Rol): Promise<Rol> {
        const { id, nombre, descripcion } = rol.mapToDTO()


        const query = `
            INSERT INTO rol (id, nombre, descripcion )
            VALUES ($1, $2, $3)
        `
        // const salt = await bcrypt.genSalt(10)
        //const hashedPassword = await bcrypt.hash(password, 10)

        const values = [id, nombre, descripcion]
        await this.client.query(query, values)
        return rol
    }

    async getAll(): Promise<Rol[]> {
        const query = 'SELECT * FROM rol'
        const result = await this.client.query(query)
        console.log(result)


        return result.rows.map((row) => {


            console.log("mapeandoooo")
            console.log("mapeandoooo")
            return Rol.create(
                row.id,
                row.nombre,
                row.descripcion
            )

        })
    }

    async getOneById(id: RolId): Promise<Rol | null> {
        const query = 'SELECT * FROM rol WHERE id = $1'
        const result = await this.client.query(query, [id.value])
        console.log(result)
        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return Rol.create(
            row.id,
            row.nombre,
            row.descripcion
        )
    }

    async getOneByNombre(nombre: Nombre): Promise<Rol | null> {
        const query = 'SELECT * FROM rol WHERE nombre = $1'
        const result = await this.client.query(query, [nombre.value])

        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return Rol.create(
            row.id,
            row.nombre,
            row.descripcion
        )
    }

    async update(rol: Rol): Promise<void> {
        const { id, nombre, descripcion } = rol.mapToDTO()
        const query = `
            UPDATE rol
            SET nombre = $2, descripcion = $3
            WHERE id = $1
        `
        const values = [id, nombre, descripcion]
        await this.client.query(query, values)
    }

    async delete(id: RolId): Promise<void> {
        const query = 'DELETE FROM rol WHERE id = $1'
        await this.client.query(query, [id.value])
    }
}