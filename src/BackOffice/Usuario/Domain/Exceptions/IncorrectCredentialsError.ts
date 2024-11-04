export class IncorrectCredentialsError extends Error {
    constructor(message: string = 'Credenciales incorrectas') {
        super(message);
        this.name = 'IncorrectCredentialsError';
        Object.setPrototypeOf(this, IncorrectCredentialsError.prototype); // Para mantener el prototipo correcto
    }
}
