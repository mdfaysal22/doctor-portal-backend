"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Patients_controller_1 = require("./Patients.controller");
const routes = express_1.default.Router();
routes.post("/create-patient", Patients_controller_1.patientControllers.createPatient);
routes.get("/", Patients_controller_1.patientControllers.getPatients);
routes.get("/:id", Patients_controller_1.patientControllers.getPatient);
routes.patch("/update-patient/:id", Patients_controller_1.patientControllers.updatePatient);
routes.delete("/remove/:id", Patients_controller_1.patientControllers.deletePatient);
exports.patientRoutes = routes;
