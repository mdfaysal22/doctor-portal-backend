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
exports.doctorServices = void 0;
const prisma_client_1 = __importDefault(require("../../lib/prisma.client"));
const createDoctor = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.doctor.create({
        data
    });
    if (!result) {
        console.log("Error");
    }
    return result;
});
const getDoctors = (searchTerm, limit, page, sortBy, sortOrder, filterData) => __awaiter(void 0, void 0, void 0, function* () {
    let offset = (page - 1) * limit;
    const result = yield prisma_client_1.default.doctor.findMany({
        include: {
            // TODO Relation
            specialization: true
        },
        where: {
            // TODO Searching 
            OR: [
                {
                    fullName: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                },
                {
                    phoneNumber: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            ],
            specialization: {
                name: {
                    //TODO filtering
                    equals: filterData.specialization,
                    mode: "insensitive"
                }
            }
        },
        take: limit,
        skip: offset,
        orderBy: {
            [sortBy]: sortOrder //TODO sorting 
        }
    });
    const total = yield prisma_client_1.default.doctor.count();
    return {
        meta: {
            page,
            pages: Math.ceil(total / limit),
            total
        },
        data: result
    };
});
const getDoctor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.doctor.findUnique({
        where: {
            id
        },
        include: {
            specialization: true
        }
    });
    return result;
});
const updateDoctor = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.doctor.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
const deleteDoctor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.doctor.delete({
        where: {
            id
        }
    });
    return result;
});
exports.doctorServices = {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
};
