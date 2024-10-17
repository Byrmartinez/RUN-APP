import { CreateItemClaseUseCase } from '../Admin/ItemClase/Aplication/CreateItemClaseUseCase'
import { PostgresItemClaseRepository } from '../Admin/ItemClase/Infrastructure/PostgresItemClaseRepository'
import { CreateItemUseCase } from '../Admin/Item/Aplication/CreateItemUseCase'
import { PostgresItemRepository } from '../Admin/Item/Infrastructure/PostgresItemRepository'
import { CreateItemCodigoBarraUseCase } from '../Admin/ItemCodigoBarra/Aplication/CreateItemCodigoBarraUseCase'
import { PostgresItemCodigoBarraRepository } from '../Admin/ItemCodigoBarra/Infrastructure/PostgresItemCodigoBarraRepository'
import { CreateClienteUseCase } from '../Admin/Cliente/Aplication/CreateClienteUseCase'
import { GetAllClientessUseCase } from '../Admin/Cliente/Aplication/GetAllClientesUseCase'
import { PostgresClienteRepository } from '../Admin/Cliente/Infrastructure/PostgresClienteRepository'
import { CreateSucursalUseCase } from '../Admin/Sucursal/Aplication/CreateSucursalUseCase'
import { PostgresSucursalRepository } from '../Admin/Sucursal/Infrastructure/PostgresSucursalRepository'
import { CreateProveedorUseCase } from '../Admin/Proveedor/Aplication/CreateProveedorUseCase'
import { PostgresProveedorRepository } from '../Admin/Proveedor/Infrastructure/PostgresProveedorRepository'


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