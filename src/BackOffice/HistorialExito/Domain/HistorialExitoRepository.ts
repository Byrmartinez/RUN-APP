import { HistorialExito } from './HistorialExito'
import { HistorialExitoId } from './ValueObjects/HistorialExitoId'


export interface HistorialExitoRepository {
    create(usuario: HistorialExito): Promise<HistorialExito>
    getAll(): Promise<HistorialExito[]>
    getOneById(id: HistorialExitoId): Promise<HistorialExito | null>
    update(usuario: HistorialExito): Promise<void>
    delete(id: HistorialExitoId): Promise<void>

}