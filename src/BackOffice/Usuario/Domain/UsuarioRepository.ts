import { Proveedor } from './Usuario'

export interface ProveedorRepository {
    create(proveedor: Proveedor): Promise<Proveedor>
}