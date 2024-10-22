
export class ProveedorParametersNotValid extends Error {
    constructor(paramName: string) {
        super(`Proveedor parameter ${paramName} is not valid`)
    }
}