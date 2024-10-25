export class Plan {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(this.value)
        this.ensureIsValid()
    }
    private ensureIsValid() {

        if (this.value.length < 5)
            throw new Error('Plan no puede tener menos de 5 caracteres')
        console.log(this.value.length)

    }
}