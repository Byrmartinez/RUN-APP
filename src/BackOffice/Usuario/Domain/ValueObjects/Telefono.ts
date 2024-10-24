
export class Telefono {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(this.value)
        this.ensureIsValid()
    }

    private ensureIsValid() {


        if (!this.value.startsWith('+')) {
            throw new Error('Debe comenzar con +')
        }

        if (this.value.length !== 12) {
            throw new Error('debe contener 12 caracteres')
        }
        console.log(this.value.length)

    }
}