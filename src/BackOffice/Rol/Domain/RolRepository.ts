import { Rol } from './Rol'
import { RolId } from './ValueObjects/RolId'
import { Nombre } from './ValueObjects/Nombre'

export interface RolRepository {
    create(rol: Rol): Promise<Rol>
    getAll(): Promise<Rol[]>
    getOneById(id: RolId): Promise<Rol | null>
    getOneByNombre(nombre: Nombre): Promise<Rol | null>
    update(rol: Rol): Promise<void>
    delete(id: RolId): Promise<void>

}