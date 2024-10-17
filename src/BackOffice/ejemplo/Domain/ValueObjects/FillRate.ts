export class FillRate {
    value: number

    constructor(value: number) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        // Verificar que sea un número
        if (!Number.isInteger(this.value)) {
            throw new Error('The fill rate must be an integer.')
        }

        // Verificar que esté en el rango de 0 a 100
        if (this.value < 0 || this.value > 100) {
            throw new Error('The fill rate must be between 0 and 100.')
        }
    }
}
