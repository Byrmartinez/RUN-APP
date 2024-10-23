"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuarioUseCase = void 0;
const Usuario_1 = require("../Domain/Usuario");
const Email_1 = require("../Domain/ValueObjects/Email");
const UsuarioAlreadyExists_1 = require("../Domain/Exceptions/UsuarioAlreadyExists");
console.log("oeee");
class CreateUsuarioUseCase {
    constructor(usuarioRepository) {
        this.repository = usuarioRepository;
    }
    // se recibe los datos primitivos
    execute(createUsuarioDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("auiestaentrandoalcreate");
            // Se extraen los valores del DTO
            const { nombre, email, password, telefono, estado, idRol } = createUsuarioDTO;
            // Usa el repositorio para validar que el usuario no exista by email
            const usuarioEmail = new Email_1.Email(email);
            const usuario = yield this.repository.getOneByEmail(usuarioEmail);
            // Si el usuario existe, lanza un error
            if (usuario)
                throw new UsuarioAlreadyExists_1.UsuarioAlreadyExists();
            // Se utiliza un método estático de la entidad para crear una nueva instancia
            const newUsuario = Usuario_1.Usuario.create(crypto.randomUUID(), nombre, email, password, telefono, estado, idRol, new Date());
            // Se llama al repositorio para persistir el nuevo usuario
            yield this.repository.create(newUsuario);
            return newUsuario;
        });
    }
}
exports.CreateUsuarioUseCase = CreateUsuarioUseCase;
