export class Descripcion {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(this.value)
        this.ensureIsValid()
    }

    private ensureIsValid() {

        if (this.value.length > 50)
            throw new Error('Descripcion no puede tener mas de 50 caracteres')
        console.log(this.value.length)
    }


}
