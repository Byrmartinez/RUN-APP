import { ProveedorRepository } from '../Domain/UsuarioRepository'
import { Proveedor } from '../Domain/Usuario'


export interface CreateProveedorDTO {
    codOwner: string,
    proveedor: []
}

export class CreateProveedorUseCase {
    private repository: ProveedorRepository

    constructor(proveedorRepository: ProveedorRepository) {
        this.repository = proveedorRepository
    }

    // se recibe los datos primitivos
    async execute(createProveedorDTO: CreateProveedorDTO): Promise<Proveedor> {


        // Se extraen los valores del DTO
        const { codOwner, proveedor } = createProveedorDTO

        // Se utiliza un método estático de la entidad para crear una nueva instancia
        const newProveedor = Proveedor.create(codOwner, proveedor)

        // Se llama al repositorio para persistir el nuevo ItemClase
        await this.repository.create(newProveedor)

        return newProveedor
    }
}
