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

/*datosPyme*/
import { CreateDatosPymeUseCase } from '../DatosPyme/Aplication/CreateDatosPymeUseCase'
import { GetAllDatosPymesUseCase } from '../DatosPyme/Aplication/GetAllDatosPymesUseCase'
import { GetDatosPymeByIdUseCase } from '../DatosPyme/Aplication/GetDastosPymeByIdUseCase'
import { GetDatosPymeByEmailUseCase } from '../DatosPyme/Aplication/GetDatosPymeByEmailUseCase'
import { UpdateDatosPymeUseCase } from '../DatosPyme/Aplication/UpdateDatosPymeUseCase'
import { DeleteDatosPymeUseCase } from '../DatosPyme/Aplication/DeleteDatosPymeUseCase'
import { PostgresDatosPymeRepository } from '../DatosPyme/Infrastructure/PostgresDatosPymeRepository'
/*datosRider*/
import { CreateDatosRiderUseCase } from '../DatosRider/Aplication/CreateDatosRiderUseCase'
import { GetAllDatosRidersUseCase } from '../DatosRider/Aplication/GetAllDatosRidersUseCase'
import { GetDatosRiderByIdUseCase } from '../DatosRider/Aplication/GetDatosRiderByIdUseCase'
import { GetDatosRiderByPatenteUseCase } from '../DatosRider/Aplication/GetDatosRiderByPatenteUseCase'
import { UpdateDatosRiderUseCase } from '../DatosRider/Aplication/UpdateDatosRiderUseCase'
import { DeleteDatosRiderUseCase } from '../DatosRider/Aplication/DeleteDatosRiderUseCase'
import { PostgresDatosRiderRepository } from '../DatosRider/Infrastructure/PostgresDatosRiderRepository'
/*envio*/
import { CreateEnvioUseCase } from '../Envio/Aplication/CreateEnvioUseCase'
import { GetAllEnviosUseCase } from '../Envio/Aplication/GetAllEnviosUseCase'
import { GetEnvioByIdUseCase } from '../Envio/Aplication/GetEnvioByIdUseCase'
import { UpdateEnvioUseCase } from '../Envio/Aplication/UpdateEnvioUseCase'
import { DeleteEnvioUseCase } from '../Envio/Aplication/DeleteEnvioUseCase'
import { PostgresEnvioRepository } from '../Envio/Infrastructure/PostgresEnvioRepository'
/*historialExito*/
import { CreateHistorialExitoUseCase } from '../HistorialExito/Aplication/CreateHistorialExitoUseCase'
import { GetAllHistorialExitosUseCase } from '../HistorialExito/Aplication/GetAllHistorialExitosUseCase'
import { GetHistorialExitoByIdUseCase } from '../HistorialExito/Aplication/GetHistorialExitoByIdUseCase'
import { UpdateHistorialExitoUseCase } from '../HistorialExito/Aplication/UpdateHistorialExitoUseCase'
import { DeleteHistorialExitoUseCase } from '../HistorialExito/Aplication/DeleteHistorialExitoUseCase'
import { PostgresHistorialExitoRepository } from '../HistorialExito/Infrastructure/PostgresHistorialExitoRepository'
/*historialCancelado*/
import { CreateHistorialCanceladoUseCase } from '../HistorialCancelado/Aplication/CreateHistorialCanceladoUseCase'
import { GetAllHistorialCanceladosUseCase } from '../HistorialCancelado/Aplication/GetAllHistorialCanceladosUseCase'
import { GetHistorialCanceladoByIdUseCase } from '../HistorialCancelado/Aplication/GetHistorialCanceladoByIdUseCase'
import { UpdateHistorialCanceladoUseCase } from '../HistorialCancelado/Aplication/UpdateHistorialCanceladoUseCase'
import { DeleteHistorialCanceladoUseCase } from '../HistorialCancelado/Aplication/DeleteHistorialCanceladoUseCase'
import { PostgresHistorialCanceladoRepository } from '../HistorialCancelado/Infrastructure/PostgresHistorialCanceladoRepository'

const postgresConnectionData = {
    host: 'localhost',
    port: 5431,
    database: 'apirunapp',
    user: '999solutions',
    password: '999solutions'
}

const usuarioRepository = new PostgresUsuarioRepository(postgresConnectionData)
const rolRepository = new PostgresRolRepository(postgresConnectionData)
const datosPymeRepository = new PostgresDatosPymeRepository(postgresConnectionData)
const datosRiderRepository = new PostgresDatosRiderRepository(postgresConnectionData)
const envioRepository = new PostgresEnvioRepository(postgresConnectionData)
const historialExitoRepository = new PostgresHistorialExitoRepository(postgresConnectionData)
const historialCanceladoRepository = new PostgresHistorialCanceladoRepository(postgresConnectionData)

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
    },
    datosPyme: {
        getAll: new GetAllDatosPymesUseCase(datosPymeRepository),
        getOneById: new GetDatosPymeByIdUseCase(datosPymeRepository),
        getOneByEmail: new GetDatosPymeByEmailUseCase(datosPymeRepository),
        create: new CreateDatosPymeUseCase(datosPymeRepository),
        update: new UpdateDatosPymeUseCase(datosPymeRepository),
        delete: new DeleteDatosPymeUseCase(datosPymeRepository)
    },
    datosRider: {
        getAll: new GetAllDatosRidersUseCase(datosRiderRepository),
        getOneById: new GetDatosRiderByIdUseCase(datosRiderRepository),
        getOneByPatente: new GetDatosRiderByPatenteUseCase(datosRiderRepository),
        create: new CreateDatosRiderUseCase(datosRiderRepository),
        update: new UpdateDatosRiderUseCase(datosRiderRepository),
        delete: new DeleteDatosRiderUseCase(datosRiderRepository)
    },
    envio: {
        getAll: new GetAllEnviosUseCase(envioRepository),
        getOneById: new GetEnvioByIdUseCase(envioRepository),
        create: new CreateEnvioUseCase(envioRepository),
        update: new UpdateEnvioUseCase(envioRepository),
        delete: new DeleteEnvioUseCase(envioRepository)
    },
    historialExito: {
        getAll: new GetAllHistorialExitosUseCase(historialExitoRepository),
        getOneById: new GetHistorialExitoByIdUseCase(historialExitoRepository),
        create: new CreateHistorialExitoUseCase(historialExitoRepository),
        update: new UpdateHistorialExitoUseCase(historialExitoRepository),
        delete: new DeleteHistorialExitoUseCase(historialExitoRepository)
    },
    historialCancelado: {
        getAll: new GetAllHistorialCanceladosUseCase(historialCanceladoRepository),
        getOneById: new GetHistorialCanceladoByIdUseCase(historialCanceladoRepository),
        create: new CreateHistorialCanceladoUseCase(historialCanceladoRepository),
        update: new UpdateHistorialCanceladoUseCase(historialCanceladoRepository),
        delete: new DeleteHistorialCanceladoUseCase(historialCanceladoRepository)
    }

}