export class Estado {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('Estado no puede estar vacio.')
        }
        if (this.value.length > 8) {
            throw new Error('Estado no puede tener mas de 25 caracteres')
        }
    }


}
