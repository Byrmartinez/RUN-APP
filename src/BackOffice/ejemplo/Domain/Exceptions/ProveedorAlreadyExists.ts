export class ProveedorAlreadyExists extends Error {
    constructor() {
        super('Proveedor already exists')
    }
}