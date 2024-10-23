import { Pool } from 'pg'
import bcrypt from 'bcrypt'
import { Usuario } from '../Domain/Usuario'
import { UsuarioRepository } from '../Domain/UsuarioRepository'
import { UsuarioId } from '../Domain/ValueObjects/UsuarioId'
import { Email } from '../Domain/ValueObjects/Email'


export class PostgresUsuarioRepository implements UsuarioRepository {

    client: Pool

    constructor(connectionData: any) {
        this.client = new Pool(connectionData)
    }

    async create(usuario: Usuario): Promise<Usuario> {
        const { id, nombre, email, password, telefono, estado, idRol, fechaCreacion } = usuario.mapToDTO()


        const query = `
            INSERT INTO usuario (id, nombre, email, password, telefono, estado, idRol, fechaCreacion)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `
        // const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, 10)

        const values = [id, nombre, email, password, telefono, estado, idRol, fechaCreacion]
        await this.client.query(query, values)
        return usuario
    }

    async getAll(): Promise<Usuario[]> {
        const query = 'SELECT * FROM usuario'
        const result = await this.client.query(query)
        return result.rows.map((row) => {
            return Usuario.create(
                row.id,
                row.nombre,
                row.email,
                row.password,
                row.telefono,
                row.estado,
                row.idRol,
                row.fechaCreacion
            )
        })
    }

    async getOneById(id: UsuarioId): Promise<Usuario | null> {
        const query = 'SELECT * FROM usuario WHERE id = $1'
        const result = await this.client.query(query, [id.value])

        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return Usuario.create(
            row.id,
            row.nombre,
            row.email,
            row.password,
            row.telefono,
            row.estado,
            row.idRol,
            row.fechaCreacion
        )
    }

    async getOneByEmail(email: Email): Promise<Usuario | null> {
        const query = 'SELECT * FROM usuario WHERE email = $1'
        const result = await this.client.query(query, [email.value])

        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return Usuario.create(
            row.id,
            row.nombre,
            row.email,
            row.password,
            row.telefono,
            row.estado,
            row.idRol,
            row.fechaCreacion
        )
    }

    async update(usuario: Usuario): Promise<void> {
        const { id, nombre, email, password, telefono, estado, idRol, fechaCreacion } = usuario.mapToDTO()
        const query = `
            UPDATE users
            SET nombre = $2, email = $3, password = $4, telefono = $5, estado = $6, idRol = $7, fechaCreacion = $8
            WHERE id = $1
        `
        const values = [id, nombre, email, password, telefono, estado, idRol, fechaCreacion]
        await this.client.query(query, values)
    }

    async delete(id: UsuarioId): Promise<void> {
        const query = 'DELETE FROM usuario WHERE id = $1'
        await this.client.query(query, [id.value])
    }
}