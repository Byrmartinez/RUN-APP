export class NomProveedor {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('The NomProveedor cannot be empty.')
        }
        if (this.value.length < 100) {
            throw new Error('NomProveedor must be a code at least 15 characters long')
        }
    }
}