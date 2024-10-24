
export class RolParametersNotValid extends Error {
    constructor(paramName: string) {
        super(`Rol parameter ${paramName} is not valid`)
    }
}