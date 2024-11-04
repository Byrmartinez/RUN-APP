import { Nombre } from "./ValueObjects/Nombre"
import { Email } from "./ValueObjects/Email"
import { Password } from "./ValueObjects/Password"
import { Telefono } from "./ValueObjects/Telefono"
import { Estado } from "./ValueObjects/Estado"
import { IdRol } from "./ValueObjects/IdRol"
import { UsuarioId } from "./ValueObjects/UsuarioId"
import { FechaCreacion } from "./ValueObjects/FechaCreacion"
import bcrypt from 'bcrypt'

export class Usuario {
    id: UsuarioId
    nombre: Nombre
    email: Email
    password: Password
    telefono: Telefono
    estado: Estado
    idRol: IdRol
    fechaCreacion: FechaCreacion


    private constructor(
        id: UsuarioId,
        nombre: Nombre,
        email: Email,
        password: Password,
        telefono: Telefono,
        estado: Estado,
        idRol: IdRol,
        fechaCreacion: FechaCreacion
    ) {
        this.id = id
        this.nombre = nombre
        this.email = email
        this.password = password
        this.telefono = telefono
        this.estado = estado
        this.idRol = idRol
        this.fechaCreacion = fechaCreacion
    }
    public static create(
        id: string,
        nombre: string,
        email: string,
        password: string,
        telefono: string,
        estado: string,
        idRol: string,
        fechaCreacion: Date
    ): Usuario {
        return new Usuario(
            new UsuarioId(id),
            new Nombre(nombre),
            new Email(email),
            new Password(password),
            new Telefono(telefono),
            new Estado(estado),
            new IdRol(idRol),
            new FechaCreacion(fechaCreacion)

        )
    }
    async verifyPassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password.value); // Compara la contraseña ingresada con la almacenada
    }
    public mapToDTO() {
        console.log('entrando al mapeo')

        return {
            id: this.id.value,
            nombre: this.nombre.value,
            email: this.email.value,
            password: this.password.value,
            telefono: this.telefono.value,
            estado: this.estado.value,
            idRol: this.idRol.value,
            fechaCreacion: this.fechaCreacion.value
        }
    }
}