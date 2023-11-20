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
exports.availableDoctorServices = void 0;
const prisma_client_1 = __importDefault(require("../../lib/prisma.client"));
const createAvailableDoctor = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.availableDoctor.create({
        data
    });
    return result;
});
const getAvailableDoctors = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.availableDoctor.findMany({
        include: {
            doctor: true,
            timeSlot: true,
            availableServices: true
        }
    });
    return result;
});
const getAvailableDoctor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.availableDoctor.findUnique({
        where: {
            id
        },
        include: {
            doctor: true,
            timeSlot: true,
            availableServices: true
        }
    });
    return result;
});
const updateAvailableDoctor = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.availableDoctor.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
const deleteAvailableDoctor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.availableDoctor.delete({
        where: {
            id
        }
    });
    return result;
});
exports.availableDoctorServices = {
    createAvailableDoctor,
    getAvailableDoctor,
    getAvailableDoctors,
    updateAvailableDoctor,
    deleteAvailableDoctor
};
