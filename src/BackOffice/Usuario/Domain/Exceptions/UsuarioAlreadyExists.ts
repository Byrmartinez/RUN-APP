export class UsuarioAlreadyExists extends Error {
    constructor() {
        super('Usuario already exists')
    }
}

