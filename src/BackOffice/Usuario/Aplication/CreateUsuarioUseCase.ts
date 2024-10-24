import { UsuarioRepository } from '../Domain/UsuarioRepository'
import { Usuario } from '../Domain/Usuario'
import { Email } from '../Domain/ValueObjects/Email'
import { UsuarioAlreadyExists } from '../Domain/Exceptions/UsuarioAlreadyExists'

export interface CreateUsuarioDTO {
    nombre: string,
    email: string,
    password: string,
    telefono: string,
    estado: string,
    idRol: string,


}
console.log("oeee")

export class CreateUsuarioUseCase {
    private repository: UsuarioRepository

    constructor(usuarioRepository: UsuarioRepository) {
        this.repository = usuarioRepository
    }

    // se recibe los datos primitivos
    async execute(createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario> {


        // Se extraen los valores del DTO
        const { nombre, email, password, telefono, estado, idRol } = createUsuarioDTO

        // Usa el repositorio para validar que el usuario no exista by email
        const usuarioEmail = new Email(email)
        const usuario = await this.repository.getOneByEmail(usuarioEmail)

        // Si el usuario existe, lanza un error
        if (usuario) throw new UsuarioAlreadyExists()

        // Se utiliza un método estático de la entidad para crear una nueva instancia
        const newUsuario = Usuario.create(crypto.randomUUID(), nombre, email, password, telefono, estado, idRol, new Date())

        // Se llama al repositorio para persistir el nuevo usuario
        await this.repository.create(newUsuario)

        return newUsuario
    }
}
