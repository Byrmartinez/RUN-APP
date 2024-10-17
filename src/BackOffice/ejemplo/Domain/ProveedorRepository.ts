import { Proveedor } from './Proveedor'

export interface ProveedorRepository {
    create(proveedor: Proveedor): Promise<Proveedor>
}