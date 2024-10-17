export class Comuna {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('The Comuna cannot be empty.')
        }
        if (this.value.length < 50) {
            throw new Error('Comuna must be a code at least 50 characters long')
        }
    }
}