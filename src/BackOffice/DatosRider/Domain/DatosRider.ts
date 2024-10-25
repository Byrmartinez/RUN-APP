import { IdDatosRider } from "./ValueObjects/IdDatosRider"
import { UsuarioId } from "./ValueObjects/UsuarioId"
import { TipoVehiculo } from "./ValueObjects/TipoVehiculo"
import { Patente } from "./ValueObjects/Patente"
import { Modelo } from "./ValueObjects/Modelo"
import { Saldo } from "./ValueObjects/Saldo"
import { Deuda } from "./ValueObjects/Deuda"



export class DatosRider {
    id: IdDatosRider
    idUsuario: UsuarioId
    tipoVehiculo: TipoVehiculo
    patente: Patente
    modelo: Modelo
    saldo: Saldo
    deuda: Deuda

    private constructor(
        id: IdDatosRider,
        idUsuario: UsuarioId,
        tipoVehiculo: TipoVehiculo,
        patente: Patente,
        modelo: Modelo,
        saldo: Saldo,
        deuda: Deuda
    ) {
        this.id = id
        this.idUsuario = idUsuario
        this.tipoVehiculo = tipoVehiculo
        this.patente = patente
        this.modelo = modelo
        this.saldo = saldo
        this.deuda = deuda

    }
    public static create(
        id: string,
        idUsuario: string,
        tipoVehiculo: string,
        patente: string,
        modelo: string,
        saldo: number,
        deuda: number
    ): DatosRider {
        return new DatosRider(
            new IdDatosRider(id),
            new UsuarioId(idUsuario),
            new TipoVehiculo(tipoVehiculo),
            new Patente(patente),
            new Modelo(modelo),
            new Saldo(saldo),
            new Deuda(deuda)
        )
    }
    public mapToDTO() {
        console.log('entrando al mapeo')

        return {
            id: this.id.value,
            idUsuario: this.idUsuario.value,
            tipoVehiculo: this.tipoVehiculo.value,
            patente: this.patente.value,
            modelo: this.modelo.value,
            saldo: this.saldo.value,
            deuda: this.deuda.value
        }
    }
}