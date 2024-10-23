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
exports.UpdateUsuarioUseCase = void 0;
const UsuarioId_1 = require("../Domain/ValueObjects/UsuarioId");
const Nombre_1 = require("../Domain/ValueObjects/Nombre");
const Email_1 = require("../Domain/ValueObjects/Email");
const Password_1 = require("../Domain/ValueObjects/Password");
const Telefono_1 = require("../Domain/ValueObjects/Telefono");
const Estado_1 = require("../Domain/ValueObjects/Estado");
const IdRol_1 = require("../Domain/ValueObjects/IdRol");
class UpdateUsuarioUseCase {
    constructor(usuarioRepository) {
        this.repository = usuarioRepository;
    }
    execute(updateUsuarioDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            // Extrae los valores del DTO
            const { id, nombre, email, password, telefono, estado, idRol } = updateUsuarioDTO;
            // Usa el Value Object para validar el ID de usuario
            const usuarioId = new UsuarioId_1.UsuarioId(id);
            // Usa el repositorio para buscar el usuario
            const usuario = yield this.repository.getOneById(usuarioId);
            // Si el usuario no existe, lanza un error
            if (!usuario)
                throw new Error('Usuario no encontrado');
            // Actualiza los valores del usuario en memoria
            if (nombre)
                usuario.nombre = new Nombre_1.Nombre(nombre);
            if (email)
                usuario.email = new Email_1.Email(email);
            if (password)
                usuario.password = new Password_1.Password(password);
            if (telefono)
                usuario.telefono = new Telefono_1.Telefono(telefono);
            if (estado)
                usuario.estado = new Estado_1.Estado(estado);
            if (idRol)
                usuario.idRol = new IdRol_1.IdRol(idRol);
            // Actualiza el usuario usando el repositorio
            return yield this.repository.update(usuario);
        });
    }
}
exports.UpdateUsuarioUseCase = UpdateUsuarioUseCase;
