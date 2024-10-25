
export class DatosPymeParametersNotValid extends Error {
    constructor(paramName: string) {
        super(`DatosPyme parameter ${paramName} is not valid`)
    }
}