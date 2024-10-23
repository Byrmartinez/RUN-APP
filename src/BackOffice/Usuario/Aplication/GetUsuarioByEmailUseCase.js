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
exports.GetUsuarioByEmailUseCase = void 0;
const Email_1 = require("../Domain/ValueObjects/Email");
class GetUsuarioByEmailUseCase {
    constructor(UsuarioRepository) {
        this.repository = UsuarioRepository;
    }
    execute(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // Usa el Value Object para manejar el ID de usuario
            const usuarioEmail = new Email_1.Email(email);
            // Retorna el usuario
            return yield this.repository.getOneByEmail(usuarioEmail);
        });
    }
}
exports.GetUsuarioByEmailUseCase = GetUsuarioByEmailUseCase;
