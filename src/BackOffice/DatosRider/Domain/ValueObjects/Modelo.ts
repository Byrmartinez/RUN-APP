export class Modelo {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(value)

        this.ensureIsValid()
    }

    private ensureIsValid() {

        if (this.value.length > 40)
            throw new Error('Modelo no puede tener mas de 25 caracteres')

        console.log(this.value.length)

    }
}