import { EnvioId } from "./ValueObjects/EnvioId"
import { UsuarioId } from "./ValueObjects/UsuarioId"
import { RiderId } from "./ValueObjects/RiderId"
import { Contador } from "./ValueObjects/Contador"
import { DireccionOrigen } from "./ValueObjects/DireccionOrigen"
import { DireccionDestino } from "./ValueObjects/DireccionDestino"
import { Descripcion } from "./ValueObjects/Descripcion"
import { DistanciaKM } from "./ValueObjects/DistanciaKM"
import { Estado } from "./ValueObjects/Estado"
import { TipoEnvio } from "./ValueObjects/TipoEnvio"
import { Costo } from "./ValueObjects/Costo"
import { ComisionAplicacion } from "./ValueObjects/ComisionAplicacion"
import { ComisionRider } from "./ValueObjects/ComisionRider"
import { ValorFinal } from "./ValueObjects/ValorFinal"
import { FechaEnvio } from "./ValueObjects/FechaEnvio"

export class Envio {
    id: EnvioId
    usuarioId: UsuarioId
    riderId: RiderId
    contador: Contador
    direccionOrigen: DireccionOrigen
    direccionDestino: DireccionDestino
    descripcion: Descripcion
    distanciaKM: DistanciaKM
    estado: Estado
    tipoEnvio: TipoEnvio
    costo: Costo
    comisionAplicacion: ComisionAplicacion
    comisionRider: ComisionRider
    valorFinal: ValorFinal
    fechaEnvio: FechaEnvio


    private constructor(
        id: EnvioId,
        usuarioId: UsuarioId,
        riderId: RiderId,
        contador: Contador,
        direccionOrigen: DireccionOrigen,
        direccionDestino: DireccionDestino,
        descripcion: Descripcion,
        distanciaKM: DistanciaKM,
        estado: Estado,
        tipoEnvio: TipoEnvio,
        costo: Costo,
        comisionAplicacion: ComisionAplicacion,
        comisionRider: ComisionRider,
        valorFinal: ValorFinal,
        fechaEnvio: FechaEnvio
    ) {
        this.id = id
        this.usuarioId = usuarioId
        this.riderId = riderId
        this.contador = contador
        this.direccionOrigen = direccionOrigen
        this.direccionDestino = direccionDestino
        this.descripcion = descripcion
        this.distanciaKM = distanciaKM
        this.estado = estado
        this.tipoEnvio = tipoEnvio
        this.costo = costo
        this.comisionAplicacion = comisionAplicacion
        this.comisionRider = comisionRider
        this.valorFinal = valorFinal
        this.fechaEnvio = fechaEnvio
    }
    public static create(
        id: string,
        usuarioId: string,
        riderId: string,
        contador: number,
        direccionOrigen: string,
        direccionDestino: string,
        descripcion: string,
        distanciaKM: number,
        estado: string,
        tipoEnvio: string,
        costo: number,
        comisionAplicacion: number,
        comisionRider: number,
        valorFinal: number,
        fechaEnvio: Date
    ): Envio {
        return new Envio(
            new EnvioId(id),
            new UsuarioId(usuarioId),
            new RiderId(riderId),
            new Contador(contador),
            new DireccionOrigen(direccionOrigen),
            new DireccionDestino(direccionDestino),
            new Descripcion(descripcion),
            new DistanciaKM(distanciaKM),
            new Estado(estado),
            new TipoEnvio(tipoEnvio),
            new Costo(costo),
            new ComisionAplicacion(comisionAplicacion),
            new ComisionRider(comisionRider),
            new ValorFinal(valorFinal),
            new FechaEnvio(fechaEnvio)

        )
    }
    public mapToDTO() {
        console.log('entrando al mapeo')

        return {
            id: this.id.value,
            usuarioId: this.usuarioId.value,
            riderId: this.riderId.value,
            contador: this.contador.value,
            direccionOrigen: this.direccionOrigen.value,
            direccionDestino: this.direccionDestino.value,
            descripcion: this.descripcion.value,
            distanciaKM: this.distanciaKM.value,
            estado: this.estado.value,
            tipoEnvio: this.tipoEnvio.value,
            costo: this.costo.value,
            comisionAplicacion: this.comisionAplicacion.value,
            comisionRider: this.comisionRider.value,
            valorFinal: this.valorFinal.value,
            fechaEnvio: this.fechaEnvio.value
        }
    }
}