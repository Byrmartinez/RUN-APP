
export class DatosRiderParametersNotValid extends Error {
    constructor(paramName: string) {
        super(`DatosRider parameter ${paramName} is not valid`)
    }
}