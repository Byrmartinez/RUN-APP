export class EnvioParametersNotValid extends Error {
    constructor(paramName: string) {
        super(`Envio parameter ${paramName} is not valid`)
    }
}