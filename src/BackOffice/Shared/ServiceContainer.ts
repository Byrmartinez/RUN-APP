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
    database: 'emailcontroller',
    user: 'proventum',
    password: 'proventum',
}

const userRepository = new PostgresUsuarioRepository(postgresConnectionData)


export const ServicesContainer = {
    usuario: {
        getAll: new GetAllUsuariosUseCase(userRepository),
        getOneById: new GetUsuarioByIdUseCase(userRepository),
        getOneByEmail: new GetUsuarioByEmailUseCase(userRepository),
        create: new CreateUsuarioUseCase(userRepository),
        update: new UpdateUsuarioUseCase(userRepository),
        delete: new DeleteUsuarioUseCase(userRepository)
    }

}