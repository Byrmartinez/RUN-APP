
export class IdRol {
    value: string

    constructor(value: string) {
        this.value = value
        console.log(this.value)
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (this.value !== "1" && this.value !== "2" && this.value !== "3") {
            throw new Error('idRol puede ser 1, 2 o 3');
        }
    }
}
