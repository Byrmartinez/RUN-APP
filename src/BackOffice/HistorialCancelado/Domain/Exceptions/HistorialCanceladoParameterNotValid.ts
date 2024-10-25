
export class HistorialCanceladoParametersNotValid extends Error {
    constructor(paramName: string) {
        super(`HistorialCancelado parameter ${paramName} is not valid`)
    }
}