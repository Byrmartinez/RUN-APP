// domain/Usuario/valueobjects/IdRol.ts

export class IdRol {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('idRol no puede estar vacio.')
        }
        if (this.value.length > 2) {
            throw new Error('idRol no puede tener mas de 2 caracteres')
        }
    }
}
