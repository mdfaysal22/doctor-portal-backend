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
exports.appointmentController = void 0;
const Appointments_service_1 = require("./Appointments.service");
const bookAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { patientId, availableServiceId, appointmentDate } = req.body;
        const result = yield Appointments_service_1.appointmentService.bookAppointment(patientId, availableServiceId, appointmentDate);
        res.status(200).json({
            status: 200,
            message: "Appointment Create Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const startAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Appointments_service_1.appointmentService.startAppointment(id);
        res.status(200).json({
            status: 200,
            message: "Appointment Started Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const cancelledAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Appointments_service_1.appointmentService.cancelAppointment(id);
        res.status(200).json({
            status: 200,
            message: "Appointment cancelled Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const finishedAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Appointments_service_1.appointmentService.finishedAppointment(id);
        res.status(200).json({
            status: 200,
            message: "Appointment Successfully Finished",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAppointments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Appointments_service_1.appointmentService.getAppointments();
        res.status(200).json({
            status: 200,
            message: "Appointments get Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Appointments_service_1.appointmentService.getAppointment(id);
        res.status(200).json({
            status: 200,
            message: "Appointment get Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = yield Appointments_service_1.appointmentService.updateAppointment(id, payload);
        res.status(200).json({
            status: 200,
            message: "Appointment Update Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Appointments_service_1.appointmentService.deleteAppointment(id);
        res.status(200).json({
            status: 200,
            message: "Appointment Remove Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.appointmentController = {
    bookAppointment,
    cancelledAppointment,
    startAppointment,
    finishedAppointment,
    getAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment
};
