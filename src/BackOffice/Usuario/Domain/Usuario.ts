import { Nombre } from "./ValueObjects/Nombre"
import { Email } from "./ValueObjects/Email"
import { Password } from "./ValueObjects/Password"
import { Telefono } from "./ValueObjects/Telefono"
import { Estado } from "./ValueObjects/Estado"
import { IdRol } from "./ValueObjects/idRol"


export class Usuario {
    nombre: Nombre
    email: Email
    password: Password
    telefono: Telefono
    estado: Estado
    idRol: IdRol


    private constructor(
        nombre: Nombre,
        email: Email,
        password: Password,
        telefono: Telefono,
        estado: Estado,
        idRol: IdRol
    ) {
        this.nombre = nombre
        this.email = email
        this.password = password
        this.telefono = telefono
        this.estado = estado
        this.idRol = idRol
    }
    public static create(
        nombre: string,
        email: string,
        password: string,
        telefono: string,
        estado: boolean,
        idRol: number
    ): Usuario {
        return new Usuario(
            new Nombre(nombre),
            new Email(email),
            new Password(password),
            new Telefono(telefono),
            new Estado(estado),
            new IdRol(idRol)

        )
    }
    public mapToDTO() {
        return {
            nombre: this.nombre.value,
            email: this.email.value,
            password: this.password.value,
            telefono: this.telefono.value,
            estado: this.estado.value,
            idRol: this.idRol.value
        }
    }
}