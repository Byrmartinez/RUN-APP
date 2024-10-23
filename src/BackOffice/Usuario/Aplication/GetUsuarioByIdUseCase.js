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
exports.GetUsuarioByIdUseCase = void 0;
const UsuarioId_1 = require("../Domain/ValueObjects/UsuarioId");
class GetUsuarioByIdUseCase {
    constructor(UsuarioRepository) {
        this.repository = UsuarioRepository;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Usa el Value Object para manejar el ID de usuario
            const usuarioId = new UsuarioId_1.UsuarioId(id);
            // Retorna el usuario
            return yield this.repository.getOneById(usuarioId);
        });
    }
}
exports.GetUsuarioByIdUseCase = GetUsuarioByIdUseCase;
