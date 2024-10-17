export class Direccion {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('The Direccion cannot be empty.')
        }
        if (this.value.length < 100) {
            throw new Error('Direccion must be a code at least 100 characters long')
        }
    }
}