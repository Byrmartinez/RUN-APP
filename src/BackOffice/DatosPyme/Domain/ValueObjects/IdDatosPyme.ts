
export class IdDatosPyme {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(value)
        this.ensureIsValid()
    }

    private ensureIsValid() {

        // TODO: Debe ser un UUID
        if (this.value && this.value.length > 80)
            throw new Error('IdDatosPyme must be at least 80 characters long')
        console.log(this.value.length)
    }

}