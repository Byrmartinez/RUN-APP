// LoginUsuarioUseCase.ts
import { UsuarioRepository } from '../Domain/UsuarioRepository';
import { Usuario } from '../Domain/Usuario';
import { Email } from '../Domain/ValueObjects/Email';
import { Password } from '../Domain/ValueObjects/Password';
import { IncorrectCredentialsError } from '../Domain/Exceptions/IncorrectCredentialsError';

export class AuthenticateUsuarioUseCase {
    constructor(private usuarioRepository: UsuarioRepository) { }

    async execute(email: string, password: string): Promise<Usuario> {
        const usuario = await this.usuarioRepository.getOneByEmail(new Email(email));
        if (!usuario) {
            throw new IncorrectCredentialsError('Email or password is incorrect.');
        }

        // Aquí deberías implementar la lógica para verificar la contraseña
        const isPasswordValid = await usuario.verifyPassword(password); // Necesitarás implementar esto en el dominio
        if (!isPasswordValid) {
            throw new IncorrectCredentialsError('Email or password is incorrect.');
        }

        return usuario;
    }
}
