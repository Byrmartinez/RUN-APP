import { Pool } from 'pg'
import { Proveedor } from '../Domain/Proveedor'
import { ProveedorRepository } from '../Domain/ProveedorRepository'



export class PostgresProveedorRepository implements ProveedorRepository {

    client: Pool

    constructor(connectionData: any) {
        this.client = new Pool(connectionData)
    }

    async create(proveedorCreated: Proveedor): Promise<Proveedor> {
        const { codOwner, proveedor } = proveedorCreated.mapToDTO()



        const query = `
            INSERT INTO proveedores (codOwner, proveedor)
            VALUES ($1, $2)
        `


        const values = [codOwner, proveedor]
        await this.client.query(query, values)
        return proveedorCreated
    }


}
