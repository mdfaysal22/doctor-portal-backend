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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientControllers = void 0;
const Patients_service_1 = require("./Patients.service");
const createPatient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { medicalProfile } = _a, patientData = __rest(_a, ["medicalProfile"]);
        const result = yield Patients_service_1.patientServices.createPatient(patientData, medicalProfile);
        res.status(200).json({
            status: 200,
            message: "Patient Create Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getPatients = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Patients_service_1.patientServices.getPatients();
        res.status(200).json({
            status: 200,
            message: "Patient get Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getPatient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Patients_service_1.patientServices.getPatient(id);
        res.status(200).json({
            status: 200,
            message: "Patient get Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updatePatient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = yield Patients_service_1.patientServices.updatePatient(id, payload);
        res.status(200).json({
            status: 200,
            message: "Patient update Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deletePatient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Patients_service_1.patientServices.deletePatient(id);
        res.status(200).json({
            status: 200,
            message: "Patient delete Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.patientControllers = {
    createPatient,
    getPatient,
    getPatients,
    updatePatient,
    deletePatient
};
