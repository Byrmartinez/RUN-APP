import { Envio } from './Envio'
import { EnvioId } from './ValueObjects/EnvioId'


export interface EnvioRepository {
    create(envio: Envio): Promise<Envio>
    getAll(): Promise<Envio[]>
    getOneById(id: EnvioId): Promise<Envio | null>
    update(envio: Envio): Promise<void>
    delete(id: EnvioId): Promise<void>

}