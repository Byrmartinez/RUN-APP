// domain/Rol/Rol.ts

export class Rol {
    constructor(
        public readonly id: number,  // Identificador único del rol
        public nombreRol: string,     // Nombre del rol
        public descripcion?: string   // Descripción opcional del rol
    ) {
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (!this.nombreRol || this.nombreRol.trim().length === 0) {
            throw new Error('El nombre del rol no puede estar vacío.');
        }

        if (this.nombreRol.length > 50) {
            throw new Error('El nombre del rol no puede exceder los 50 caracteres.');
        }

        if (this.descripcion && this.descripcion.length > 255) {
            throw new Error('La descripción del rol no puede exceder los 255 caracteres.');
        }
    }
}
