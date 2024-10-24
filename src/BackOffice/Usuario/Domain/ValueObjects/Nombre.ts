export class Nombre {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(value)

        this.ensureIsValid()
    }

    private ensureIsValid() {

        if (this.value.length > 25)
            throw new Error('Nombre no puede tener mas de 25 caracteres')

        console.log(this.value.length)

    }
}