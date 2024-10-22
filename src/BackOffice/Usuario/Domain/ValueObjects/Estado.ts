export class Estado {
    value: boolean;

    constructor(value: boolean) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (typeof this.value !== 'boolean') {
            throw new Error('El estado debe ser un valor booleano.');
        }
    }


}
