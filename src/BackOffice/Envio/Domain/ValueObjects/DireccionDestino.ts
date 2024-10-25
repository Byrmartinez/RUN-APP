export class DireccionDestino {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(this.value)
        this.ensureIsValid()
    }

    private ensureIsValid() {

        if (this.value.length > 80)
            throw new Error('DireccionDestino no puede tener mas de 80 caracteres')
        console.log(this.value.length)
    }


}
