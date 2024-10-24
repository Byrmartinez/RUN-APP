import { RolId } from "./ValueObjects/RolId"
import { Nombre } from "./ValueObjects/Nombre"
import { Descripcion } from "./ValueObjects/Descripcion"

export class Rol {
    id: RolId
    nombre: Nombre
    descripcion: Descripcion



    private constructor(
        id: RolId,
        nombre: Nombre,
        descripcion: Descripcion
    ) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion

    }
    public static create(
        id: string,
        nombre: string,
        descripcion: string
    ): Rol {
        return new Rol(
            new RolId(id),
            new Nombre(nombre),
            new Descripcion(descripcion)

        )
    }
    public mapToDTO() {
        console.log('entrando al mapeo')

        return {
            id: this.id.value,
            nombre: this.nombre.value,
            descripcion: this.descripcion.value
        }
    }
}