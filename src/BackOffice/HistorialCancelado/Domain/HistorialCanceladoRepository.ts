import { HistorialCancelado } from './HistorialCancelado'
import { HistorialCanceladoId } from './ValueObjects/HistorialCanceladoId'


export interface HistorialCanceladoRepository {
    create(historialCancelado: HistorialCancelado): Promise<HistorialCancelado>
    getAll(): Promise<HistorialCancelado[]>
    getOneById(id: HistorialCanceladoId): Promise<HistorialCancelado | null>
    update(historialCancelado: HistorialCancelado): Promise<void>
    delete(id: HistorialCanceladoId): Promise<void>

}