import { IdDatosPyme } from "./ValueObjects/IdDatosPyme"
import { UsuarioId } from "./ValueObjects/UsuarioId"
import { Nombre } from "./ValueObjects/Nombre"
import { Email } from "./ValueObjects/Email"
import { Plan } from "./ValueObjects/Plan"
import { Saldo } from "./ValueObjects/Saldo"
import { Deuda } from "./ValueObjects/Deuda"



export class DatosPyme {
    id: IdDatosPyme
    idUsuario: UsuarioId
    nombre: Nombre
    email: Email
    plan: Plan
    saldo: Saldo
    deuda: Deuda

    private constructor(
        id: IdDatosPyme,
        idUsuario: UsuarioId,
        nombre: Nombre,
        email: Email,
        plan: Plan,
        saldo: Saldo,
        deuda: Deuda
    ) {
        this.id = id
        this.idUsuario = idUsuario
        this.nombre = nombre
        this.email = email
        this.plan = plan
        this.saldo = saldo
        this.deuda = deuda

    }
    public static create(
        id: string,
        idUsuario: string,
        nombre: string,
        email: string,
        plan: string,
        saldo: number,
        deuda: number
    ): DatosPyme {
        return new DatosPyme(
            new IdDatosPyme(id),
            new UsuarioId(idUsuario),
            new Nombre(nombre),
            new Email(email),
            new Plan(plan),
            new Saldo(saldo),
            new Deuda(deuda)
        )
    }
    public mapToDTO() {
        console.log('entrando al mapeo')

        return {
            id: this.id.value,
            idUsuario: this.idUsuario.value,
            nombre: this.nombre.value,
            email: this.email.value,
            plan: this.plan.value,
            saldo: this.saldo.value,
            deuda: this.deuda.value
        }
    }
}