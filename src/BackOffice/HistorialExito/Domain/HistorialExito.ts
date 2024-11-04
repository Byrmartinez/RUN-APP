import { HistorialExitoId } from "./ValueObjects/HistorialExitoId"
import { EnvioId } from "./ValueObjects/EnvioId"
import { RiderId } from "./ValueObjects/RiderId"
import { Calificacion } from "./ValueObjects/Calificacion"
import { Comentario } from "./ValueObjects/Comentario"
import { FechaEntrega } from "./ValueObjects/FechaEntrega"

export class HistorialExito {
    id: HistorialExitoId
    envioId: EnvioId
    riderId: RiderId
    calificacion: Calificacion
    comentario: Comentario
    fechaEntrega: FechaEntrega


    private constructor(
        id: HistorialExitoId,
        envioId: EnvioId,
        riderId: RiderId,
        calificacion: Calificacion,
        comentario: Comentario,
        fechaEntrega: FechaEntrega
    ) {
        this.id = id
        this.envioId = envioId
        this.riderId = riderId
        this.calificacion = calificacion
        this.comentario = comentario
        this.fechaEntrega = fechaEntrega

    }
    public static create(
        id: string,
        envioId: string,
        riderId: string,
        calificacion: number,
        comentario: string,
        fechaEntrega: Date
    ): HistorialExito {
        return new HistorialExito(
            new HistorialExitoId(id),
            new EnvioId(envioId),
            new RiderId(riderId),
            new Calificacion(calificacion),
            new Comentario(comentario),
            new FechaEntrega(fechaEntrega)

        )
    }
    public mapToDTO() {
        console.log('entrando al mapeo')

        return {
            id: this.id.value,
            envioId: this.envioId.value,
            riderId: this.riderId.value,
            calificacion: this.calificacion.value,
            comentario: this.comentario.value,
            fechaEntrega: this.fechaEntrega.value
        }
    }
}