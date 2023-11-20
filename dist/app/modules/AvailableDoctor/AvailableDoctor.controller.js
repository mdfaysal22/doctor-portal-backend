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
exports.availableDoctorControllers = void 0;
const AvailableDoctor_service_1 = require("./AvailableDoctor.service");
const createAvailableDoctor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield AvailableDoctor_service_1.availableDoctorServices.createAvailableDoctor(data);
        res.status(200).json({
            statusCode: 200,
            message: 'success',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAvailableDoctors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield AvailableDoctor_service_1.availableDoctorServices.getAvailableDoctors();
        res.status(200).json({
            statusCode: 200,
            message: 'success',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAvailableDoctor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield AvailableDoctor_service_1.availableDoctorServices.getAvailableDoctor(id);
        res.status(200).json({
            statusCode: 200,
            message: 'success',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateAvailableDoctor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = yield AvailableDoctor_service_1.availableDoctorServices.updateAvailableDoctor(id, data);
        res.status(200).json({
            statusCode: 200,
            message: 'success',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteAvailableDoctor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield AvailableDoctor_service_1.availableDoctorServices.deleteAvailableDoctor(id);
        res.status(200).json({
            statusCode: 200,
            message: 'success',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.availableDoctorControllers = {
    createAvailableDoctor,
    getAvailableDoctors,
    getAvailableDoctor,
    updateAvailableDoctor,
    deleteAvailableDoctor
};
