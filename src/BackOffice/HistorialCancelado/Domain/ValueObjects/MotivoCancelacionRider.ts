export class MotivoCancelacionRider {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(this.value)
        this.ensureIsValid()
    }

    private ensureIsValid() {

        if (this.value.length > 200)
            throw new Error('MotivoCancelacionRider no puede tener mas de 200 caracteres')
        console.log(this.value.length)
    }


}
