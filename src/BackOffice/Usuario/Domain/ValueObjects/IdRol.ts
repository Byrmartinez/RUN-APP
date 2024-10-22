// domain/Usuario/valueobjects/IdRol.ts

export class IdRol {
    value: number;

    constructor(value: number) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (this.value <= 0 || !Number.isInteger(this.value)) {
            throw new Error('El idRol debe ser un número entero positivo.');
        }
    }
}
