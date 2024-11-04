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
            INSERT INTO usuario (id, nombre, email, password, telefono, estado, id_rol, fecha_creacion )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, 10)

        const values = [id, nombre, email, hashedPassword, telefono, estado, idRol, fechaCreacion]
        await this.client.query(query, values)
        return usuario
    }

    async getAll(): Promise<Usuario[]> {
        const query = 'SELECT * FROM usuario'
        const result = await this.client.query(query)
        console.log(result)


        return result.rows.map((row) => {
            console.log('Fecha creación:', row.fechaCreacion)
            console.log('Fecha creación:', row.fecha_creacion);
            console.log('Estado:', row.estado) // Log del estado
            console.log("mapeandoooo")
            console.log("mapeandoooo")
            return Usuario.create(
                row.id,
                row.nombre,
                row.email,
                row.password,
                row.telefono,
                row.estado,
                row.id_rol,
                row.fecha_creacion
            )

        })
    }

    async getOneById(id: UsuarioId): Promise<Usuario | null> {
        const query = 'SELECT * FROM usuario WHERE id = $1'
        const result = await this.client.query(query, [id.value])
        console.log(result)
        if (result.rows.length === 0) return null

        const row = result.rows[0]
        return Usuario.create(
            row.id,
            row.nombre,
            row.email,
            row.password,
            row.telefono,
            row.estado,
            row.id_rol,
            row.fecha_creacion
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
            row.id_rol,
            row.fecha_creacion
        )
    }

    async update(usuario: Usuario): Promise<void> {
        const { id, nombre, email, password, telefono, estado, idRol, fechaCreacion } = usuario.mapToDTO()
        const query = `
            UPDATE usuario
            SET nombre = $2, email = $3, password = $4, telefono = $5, estado = $6, id_rol = $7, fecha_creacion = $8
            WHERE id = $1
        `
        const values = [id, nombre, email, password, telefono, estado, idRol, fechaCreacion]
        await this.client.query(query, values)
    }

    async delete(id: UsuarioId): Promise<void> {
        const query = 'DELETE FROM usuario WHERE id = $1'
        await this.client.query(query, [id.value])
    }
    async authenticate(email: Email, password: string): Promise<Usuario | null> {
        const query = 'SELECT * FROM usuario WHERE email = $1 AND password = $2';
        const result = await this.client.query(query, [email.value, password]);

        if (result.rows.length === 0) {
            return null; // No se encontró el usuario o las credenciales son incorrectas
        }

        const row = result.rows[0];

        if (row.estado !== 'activo') {
            return null; // El usuario no está activo, devolver null o lanzar un error personalizado
        }

        // Crear y devolver un objeto Usuario si todo es válido
        return Usuario.create(
            row.id,
            row.nombre,
            row.email,
            row.password,
            row.telefono,
            row.estado,
            row.id_rol,
            row.fecha_creacion
        );
    }
}