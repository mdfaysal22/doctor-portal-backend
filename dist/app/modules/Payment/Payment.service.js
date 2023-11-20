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
exports.paymentServices = void 0;
const prisma_client_1 = __importDefault(require("../../lib/prisma.client"));
// const create = async(data: Payment) : Promise<Payment> => {
//     const result = await prisma.payment.create({
//         data
//     });
//     return result;
// }
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.payment.findMany();
    return result;
});
const get = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.payment.findUnique({
        where: { id }
    });
    return result;
});
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.payment.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
const deleteData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.payment.delete({
        where: { id }
    });
    return result;
});
exports.paymentServices = {
    // create,
    getAll,
    get,
    update,
    deleteData
};
