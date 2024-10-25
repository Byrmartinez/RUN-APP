export class Estado {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(this.value)
        this.ensureIsValid()
    }

    private ensureIsValid() {

        if (this.value.length > 12)
            throw new Error('Estado no puede tener mas de 12 caracteres')
        console.log(this.value.length)
    }


}
