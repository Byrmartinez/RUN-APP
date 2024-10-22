export class Nombre {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('Nombre no puede estar vacio.')
        }
        if (this.value.length > 25) {
            throw new Error('Nombre no puede tener mas de 25 caracteres')
        }
    }
}