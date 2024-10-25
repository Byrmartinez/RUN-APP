
export class HistorialExitoParametersNotValid extends Error {
    constructor(paramName: string) {
        super(`HistorialExito parameter ${paramName} is not valid`)
    }
}