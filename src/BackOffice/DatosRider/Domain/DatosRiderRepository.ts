import { DatosRider } from './DatosRider'
import { IdDatosRider } from './ValueObjects/IdDatosRider'
import { Patente } from './ValueObjects/Patente'

export interface DatosRiderRepository {
    create(datosPyme: DatosRider): Promise<DatosRider>
    getAll(): Promise<DatosRider[]>
    getOneById(id: IdDatosRider): Promise<DatosRider | null>
    getOneByPatente(patente: Patente): Promise<DatosRider | null>
    update(datosPyme: DatosRider): Promise<void>
    delete(id: IdDatosRider): Promise<void>

}