import { HistorialCanceladoId } from "./ValueObjects/HistorialCanceladoId"
import { EnvioId } from "./ValueObjects/EnvioId"
import { RiderId } from "./ValueObjects/RiderId"
import { MotivoCancelacionRider } from "./ValueObjects/MotivoCancelacionRider"
import { MotivoCancelacionGenerador } from "./ValueObjects/MotivoCancelacionGenerador"
import { FechaCancelacion } from "./ValueObjects/FechaCancelacion"

export class HistorialCancelado {
    id: HistorialCanceladoId
    envioId: EnvioId
    riderId: RiderId
    motivoCancelacionRider: MotivoCancelacionRider
    motivoCancelacionGenerador: MotivoCancelacionGenerador
    fechaCancelacion: FechaCancelacion


    private constructor(
        id: HistorialCanceladoId,
        envioId: EnvioId,
        riderId: RiderId,
        motivoCancelacionRider: MotivoCancelacionRider,
        motivoCancelacionGenerador: MotivoCancelacionGenerador,
        fechaCancelacion: FechaCancelacion
    ) {
        this.id = id
        this.envioId = envioId
        this.riderId = riderId
        this.motivoCancelacionRider = motivoCancelacionRider
        this.motivoCancelacionGenerador = motivoCancelacionGenerador
        this.fechaCancelacion = fechaCancelacion

    }
    public static create(
        id: string,
        envioId: string,
        riderId: string,
        motivoCancelacionRider: string,
        motivoCancelacionGenerador: string,
        fechaCancelacion: Date
    ): HistorialCancelado {
        return new HistorialCancelado(
            new HistorialCanceladoId(id),
            new EnvioId(envioId),
            new RiderId(riderId),
            new MotivoCancelacionRider(motivoCancelacionRider),
            new MotivoCancelacionGenerador(motivoCancelacionGenerador),
            new FechaCancelacion(fechaCancelacion)

        )
    }
    public mapToDTO() {
        console.log('entrando al mapeo')

        return {
            id: this.id.value,
            envioId: this.envioId.value,
            riderId: this.riderId.value,
            motivoCancelacionRider: this.motivoCancelacionRider.value,
            motivoCancelacionGenerador: this.motivoCancelacionGenerador.value,
            fechaCancelacion: this.fechaCancelacion.value
        }
    }
}