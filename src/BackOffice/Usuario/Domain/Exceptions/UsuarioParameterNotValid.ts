
export class UsuarioParametersNotValid extends Error {
    constructor(paramName: string) {
        super(`Usuario parameter ${paramName} is not valid`)
    }
}