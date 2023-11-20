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
exports.patientServices = void 0;
const prisma_client_1 = __importDefault(require("../../lib/prisma.client"));
const createPatient = (data, medicalProfile) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const createPatient = yield transactionClient.patient.create({
            data
        });
        const createMedicalProfile = yield transactionClient.medicalProfile.create({
            data: Object.assign(Object.assign({}, medicalProfile), { patientId: createPatient.id, profileStatus: true })
        });
        return {
            createPatient,
            createMedicalProfile
        };
    }));
    return result;
});
const getPatients = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.patient.findMany();
    return result;
});
const getPatient = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.patient.findUnique({
        where: {
            id
        },
        include: {
            medicalProfile: true,
            appointments: true
        }
    });
    return result;
});
const updatePatient = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.patient.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
const deletePatient = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.patient.delete({
        where: {
            id
        }
    });
    return result;
});
exports.patientServices = {
    createPatient,
    getPatient,
    getPatients,
    updatePatient,
    deletePatient
};
