import { UsuarioRepository } from '../Domain/UsuarioRepository'

import { UsuarioId } from '../Domain/ValueObjects/UsuarioId'
import { Nombre } from '../Domain/ValueObjects/Nombre'
import { Email } from '../Domain/ValueObjects/Email'
import { Password } from '../Domain/ValueObjects/Password'
import { Telefono } from '../Domain/ValueObjects/Telefono'
import { Estado } from '../Domain/ValueObjects/Estado'
import { IdRol } from '../Domain/ValueObjects/IdRol'



export class UpdateUsuarioUseCase {
    private repository: UsuarioRepository

    constructor(usuarioRepository: UsuarioRepository) {
        this.repository = usuarioRepository
    }

    async execute(updateUsuarioDTO:
        {
            id: string,
            nombre?: string,
            email?: string,
            password?: string,
            telefono?: string,
            estado?: string,
            idRol?: string
        }
    ): Promise<void> {

        // Extrae los valores del DTO
        const { id, nombre, email, password, telefono, estado, idRol } = updateUsuarioDTO

        // Usa el Value Object para validar el ID de usuario
        const usuarioId = new UsuarioId(id)

        // Usa el repositorio para buscar el usuario
        const usuario = await this.repository.getOneById(usuarioId)

        // Si el usuario no existe, lanza un error
        if (!usuario) throw new Error('Usuario no encontrado')

        // Actualiza los valores del usuario en memoria
        if (nombre) usuario.nombre = new Nombre(nombre)
        if (email) usuario.email = new Email(email)
        if (password) usuario.password = new Password(password)
        if (telefono) usuario.telefono = new Telefono(telefono)
        if (estado) usuario.estado = new Estado(estado)
        if (idRol) usuario.idRol = new IdRol(idRol)


        // Actualiza el usuario usando el repositorio
        return await this.repository.update(usuario)
    }
}