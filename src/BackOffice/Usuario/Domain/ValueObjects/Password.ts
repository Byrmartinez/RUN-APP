export class Password {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }
    private ensureIsValid() {

        if (!this.value || this.value.trim().length === 0) {
            throw new Error('Password no puede estar vacio.')
        }
        if (this.value.length < 8) {
            throw new Error('Password no puede tener menos de 8 caracteres')
        }

    }
}