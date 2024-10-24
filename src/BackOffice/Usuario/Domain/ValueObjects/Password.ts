export class Password {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(this.value)
        this.ensureIsValid()
    }
    private ensureIsValid() {

        if (this.value.length < 8)
            throw new Error('Password no puede tener menos de 8 caracteres')
        console.log(this.value.length)

    }
}