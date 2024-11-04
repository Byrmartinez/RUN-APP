export class FechaCancelacion {
    value: Date

    constructor(value: Date | string) {
        // Si recibes un string, intenta convertirlo a Date
        if (typeof value === 'string') {
            this.value = new Date(value);
        } else {
            this.value = value;
        }

        console.log("ESTE ES EL VALOR QUE TRAE"); // Para depuración, verifica que se esté creando correctamente
        console.log(this.value); // Para depuración, verifica que se esté creando correctamente
        console.log("ESTE ES EL VALOR QUE TRAE"); // Para depuración, verifica que se esté creando correctamente
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (this.value > new Date()) {
            throw new Error('FechaCancelacion de creación no es válida');
        }


    }
}