import { CreateUsuarioUseCase } from '../Usuario/Aplication/CreateUsuarioUseCase'
import { GetAllUsuariosUseCase } from '../Usuario/Aplication/GetAllUsuariosUseCase'
import { GetUsuarioByIdUseCase } from '../Usuario/Aplication/GetUsuarioByIdUseCase'
import { GetUsuarioByEmailUseCase } from '../Usuario/Aplication/GetUsuarioByEmailUseCase'
import { UpdateUsuarioUseCase } from '../Usuario/Aplication/UpdateUsuarioUseCase'
import { DeleteUsuarioUseCase } from '../Usuario/Aplication/DeleteUsuarioUseCase'
import { PostgresUsuarioRepository } from '../Usuario/Infrastructure/PostgresUsuarioRepository'



const postgresConnectionData = {
    host: 'localhost',
    port: 5431,
    database: 'apirunapp',
    user: '999solutions',
    password: '999solutions'
}

const usuarioRepository = new PostgresUsuarioRepository(postgresConnectionData)


export const ServicesContainer = {
    usuario: {
        getAll: new GetAllUsuariosUseCase(usuarioRepository),
        getOneById: new GetUsuarioByIdUseCase(usuarioRepository),
        getOneByEmail: new GetUsuarioByEmailUseCase(usuarioRepository),
        create: new CreateUsuarioUseCase(usuarioRepository),
        update: new UpdateUsuarioUseCase(usuarioRepository),
        delete: new DeleteUsuarioUseCase(usuarioRepository)
    }

}