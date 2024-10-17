export class RazonSocial {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('The RazonSocial cannot be empty.')
        }
        if (this.value.length < 100) {
            throw new Error('RazonSocial must be a code at least 15 characters long')
        }
    }
}