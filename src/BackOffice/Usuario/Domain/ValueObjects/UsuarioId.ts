export class UsuarioId {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {

        // TODO: Debe ser un UUID
        if (this.value.length < 5)
            throw new Error('UsuarioId debe tener a lo menos 5 caracteres')
    }


}