
export class Telefono {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('Telefono no puede estar vacio.')
        }

        if (!this.value.startsWith('+')) {
            throw new Error('Debe comenzar con +')
        }

        if (this.value.length !== 12) {
            throw new Error('debe contener 12 caracteres')
        }

    }
}