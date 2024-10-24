import { RolRepository } from '../Domain/RolRepository'
import { Rol } from '../Domain/Rol'
import { Nombre } from '../Domain/ValueObjects/Nombre'
import { RolAlreadyExists } from '../Domain/Exceptions/RolAlreadyExists'

export interface CreateRolDTO {
    nombre: string,
    descripcion: string,



}
console.log("oeee")

export class CreateRolUseCase {
    private repository: RolRepository

    constructor(rolRepository: RolRepository) {
        this.repository = rolRepository
    }

    // se recibe los datos primitivos
    async execute(createRolDTO: CreateRolDTO): Promise<Rol> {


        // Se extraen los valores del DTO
        const { nombre, descripcion } = createRolDTO

        // Usa el repositorio para validar que el rol no exista by email
        const rolNombre = new Nombre(nombre)
        const rol = await this.repository.getOneByNombre(rolNombre)

        // Si el rol existe, lanza un error
        if (rol) throw new RolAlreadyExists()

        // Se utiliza un método estático de la entidad para crear una nueva instancia
        const newRol = Rol.create(crypto.randomUUID(), nombre, descripcion)

        // Se llama al repositorio para persistir el nuevo rol
        await this.repository.create(newRol)

        return newRol
    }
}
