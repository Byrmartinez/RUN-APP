export class CodProveedor {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('The CodProveedor cannot be empty.')
        }
        if (this.value.length < 15) {
            throw new Error('CodProveedor must be a code at least 15 characters long')
        }
    }
}