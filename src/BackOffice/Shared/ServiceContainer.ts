import { CreateItemClaseUseCase } from '../Usuario/ItemClase/Aplication/CreateItemClaseUseCase'
import { PostgresItemClaseRepository } from '../Usuario/ItemClase/Infrastructure/PostgresItemClaseRepository'
import { CreateItemUseCase } from '../Usuario/Item/Aplication/CreateItemUseCase'
import { PostgresItemRepository } from '../Usuario/Item/Infrastructure/PostgresItemRepository'
import { CreateItemCodigoBarraUseCase } from '../Usuario/ItemCodigoBarra/Aplication/CreateItemCodigoBarraUseCase'
import { PostgresItemCodigoBarraRepository } from '../Usuario/ItemCodigoBarra/Infrastructure/PostgresItemCodigoBarraRepository'
import { CreateClienteUseCase } from '../Usuario/Cliente/Aplication/CreateClienteUseCase'
import { GetAllClientessUseCase } from '../Usuario/Cliente/Aplication/GetAllClientesUseCase'
import { PostgresClienteRepository } from '../Usuario/Cliente/Infrastructure/PostgresClienteRepository'
import { CreateSucursalUseCase } from '../Usuario/Sucursal/Aplication/CreateSucursalUseCase'
import { PostgresSucursalRepository } from '../Usuario/Sucursal/Infrastructure/PostgresSucursalRepository'
import { CreateProveedorUseCase } from '../Usuario/Proveedor/Aplication/CreateProveedorUseCase'
import { PostgresProveedorRepository } from '../Usuario/Proveedor/Infrastructure/PostgresProveedorRepository'


const postgresConnectionData = {
    host: 'localhost',
    port: 5431,
    database: 'apienfasis',
    user: 'proventum',
    password: 'proventum',
}

const itemClaseRepository = new PostgresItemClaseRepository(postgresConnectionData)
const itemRepository = new PostgresItemRepository(postgresConnectionData)
const itemCodigoBarraRepository = new PostgresItemCodigoBarraRepository(postgresConnectionData)
const clienteRepository = new PostgresClienteRepository(postgresConnectionData)
const sucursalReposiotory = new PostgresSucursalRepository(postgresConnectionData)
const proveedorRepository = new PostgresProveedorRepository(postgresConnectionData)


export const ServicesContainer = {
    itemClase: {
        create: new CreateItemClaseUseCase(itemClaseRepository),
    },
    item: {
        create: new CreateItemUseCase(itemRepository),
    },
    itemCodigoBarra: {
        create: new CreateItemCodigoBarraUseCase(itemCodigoBarraRepository),
    },
    cliente: {
        create: new CreateClienteUseCase(clienteRepository),
        getAll: new GetAllClientessUseCase(clienteRepository)
    },
    sucursal: {
        create: new CreateSucursalUseCase(sucursalReposiotory)
    },
    proveedor: {
        create: new CreateProveedorUseCase(proveedorRepository)
    }

}