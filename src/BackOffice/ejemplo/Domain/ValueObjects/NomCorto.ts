export class NomCorto {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('The NomCorto cannot be empty.')
        }
        if (this.value.length < 50) {
            throw new Error('NomCorto must be a code at least 15 characters long')
        }
    }
}