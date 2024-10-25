import { DatosPyme } from './DatosPyme'
import { IdDatosPyme } from './ValueObjects/IdDatosPyme'
import { Email } from './ValueObjects/Email'

export interface DatosPymeRepository {
    create(datosPyme: DatosPyme): Promise<DatosPyme>
    getAll(): Promise<DatosPyme[]>
    getOneById(id: IdDatosPyme): Promise<DatosPyme | null>
    getOneByEmail(email: Email): Promise<DatosPyme | null>
    update(datosPyme: DatosPyme): Promise<void>
    delete(id: IdDatosPyme): Promise<void>

}