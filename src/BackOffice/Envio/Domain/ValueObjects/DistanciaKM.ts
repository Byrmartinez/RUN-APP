export class DistanciaKM {
    value: number

    constructor(value: number) {
        this.value = value
        console.log(this.value)
        this.ensureIsValid()
    }

    private ensureIsValid() {
        // Verificar que el valor sea un número
        /*if (typeof isNaN(this.value)) {
            throw new Error('DistanciaKM debe ser un número válido')
        }*/

        // Validación adicional: número mayor o igual a 0 (por ejemplo)
        if (this.value < 0) {
            throw new Error('DistanciaKM no puede ser un número negativo')
        }
    }
}
