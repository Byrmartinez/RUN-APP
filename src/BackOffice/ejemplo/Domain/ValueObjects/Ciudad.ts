export class Ciudad {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('The Ciudad cannot be empty.')
        }

        if (this.value.length < 50) {
            throw new Error('Ciudad must be a code at least 50 characters long')
        }
    }
}