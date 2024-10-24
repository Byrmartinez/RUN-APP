
export class RolId {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(value)
        this.ensureIsValid()
    }

    private ensureIsValid() {

        // TODO: Debe ser un UUID
        if (this.value && this.value.length > 80)
            throw new Error('RolId must be at least 1 characters long')
        console.log(this.value.length)
    }

}