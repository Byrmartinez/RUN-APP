export class Estado {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(this.value)
        this.ensureIsValid()
    }

    private ensureIsValid() {

        if (this.value.length > 8)
            throw new Error('Estado no puede tener mas de 25 caracteres')
        console.log(this.value.length)
    }


}
