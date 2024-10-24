/*Usaurio*/
import { CreateUsuarioUseCase } from '../Usuario/Aplication/CreateUsuarioUseCase'
import { GetAllUsuariosUseCase } from '../Usuario/Aplication/GetAllUsuariosUseCase'
import { GetUsuarioByIdUseCase } from '../Usuario/Aplication/GetUsuarioByIdUseCase'
import { GetUsuarioByEmailUseCase } from '../Usuario/Aplication/GetUsuarioByEmailUseCase'
import { UpdateUsuarioUseCase } from '../Usuario/Aplication/UpdateUsuarioUseCase'
import { DeleteUsuarioUseCase } from '../Usuario/Aplication/DeleteUsuarioUseCase'
import { PostgresUsuarioRepository } from '../Usuario/Infrastructure/PostgresUsuarioRepository'
/*Rol*/
import { CreateRolUseCase } from '../Rol/Aplication/CreateRolUseCase'
import { GetAllRolesUseCase } from '../Rol/Aplication/GetAllRolesUseCase'
import { GetRolByIdUseCase } from '../Rol/Aplication/GetRolByIdUseCase'
import { GetRolByNombreUseCase } from '../Rol/Aplication/GetRolByNombreUseCase'
import { UpdateRolUseCase } from '../Rol/Aplication/UpdateRolUseCase'
import { DeleteRolUseCase } from '../Rol/Aplication/DeleteRolUseCase'
import { PostgresRolRepository } from '../Rol/Infrastructure/PostgresRolRepository'


const postgresConnectionData = {
    host: 'localhost',
    port: 5431,
    database: 'apirunapp',
    user: '999solutions',
    password: '999solutions'
}

const usuarioRepository = new PostgresUsuarioRepository(postgresConnectionData)
const rolRepository = new PostgresRolRepository(postgresConnectionData)

export const ServicesContainer = {
    usuario: {
        getAll: new GetAllUsuariosUseCase(usuarioRepository),
        getOneById: new GetUsuarioByIdUseCase(usuarioRepository),
        getOneByEmail: new GetUsuarioByEmailUseCase(usuarioRepository),
        create: new CreateUsuarioUseCase(usuarioRepository),
        update: new UpdateUsuarioUseCase(usuarioRepository),
        delete: new DeleteUsuarioUseCase(usuarioRepository)
    },
    rol: {
        getAll: new GetAllRolesUseCase(rolRepository),
        getOneById: new GetRolByIdUseCase(rolRepository),
        getOneByNombre: new GetRolByNombreUseCase(rolRepository),
        create: new CreateRolUseCase(rolRepository),
        update: new UpdateRolUseCase(rolRepository),
        delete: new DeleteRolUseCase(rolRepository)
    }

}