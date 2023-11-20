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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicalProfileServices = void 0;
const prisma_client_1 = __importDefault(require("../../lib/prisma.client"));
// const create = async(data:MedicalProfile) : Promise<MedicalProfile> => {
//     const result = await prisma.medicalProfile.create({
//         data
//     });
//     return result;
// }
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.medicalProfile.findMany();
    return result;
});
const get = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.medicalProfile.findUnique({
        where: { id }
    });
    return result;
});
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.medicalProfile.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
const deleteData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.medicalProfile.delete({
        where: { id }
    });
    return result;
});
exports.medicalProfileServices = {
    // create,
    getAll,
    get,
    update,
    deleteData
};
