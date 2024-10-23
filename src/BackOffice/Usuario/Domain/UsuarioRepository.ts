import { Usuario } from './Usuario'
import { UsuarioId } from './ValueObjects/UsuarioId'
import { Email } from './ValueObjects/Email'

export interface UsuarioRepository {
    create(proveedor: Usuario): Promise<Usuario>
    getAll(): Promise<Usuario[]>
    getOneById(id: UsuarioId): Promise<Usuario | null>
    getOneByEmail(email: Email): Promise<Usuario | null>
    update(user: Usuario): Promise<void>
    delete(id: UsuarioId): Promise<void>

}