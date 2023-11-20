"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const Specializations_routes_1 = require("../modules/Specializations/Specializations.routes");
const Doctors_routes_1 = require("../modules/Doctors/Doctors.routes");
const Appointments_routes_1 = require("../modules/Appointments/Appointments.routes");
const Services_routes_1 = require("../modules/Services/Services.routes");
const Admins_routes_1 = require("../modules/Admins/Admins.routes");
const Patients_routes_1 = require("../modules/Patients/Patients.routes");
const AvailableDoctor_routers_1 = require("../modules/AvailableDoctor/AvailableDoctor.routers");
const AvailableService_routers_1 = require("../modules/AvailableService/AvailableService.routers");
const Payment_routers_1 = require("../modules/Payment/Payment.routers");
const MedicalProfile_routers_1 = require("../modules/MedicalProfile/MedicalProfile.routers");
const TimeSlot_routers_1 = require("../modules/TimeSlot/TimeSlot.routers");
const router = express_1.default.Router();
const moduleRoutes = [
    { path: '/specialization', route: Specializations_routes_1.specializationRoutes },
    { path: '/doctor', route: Doctors_routes_1.doctorRoutes },
    { path: '/appointment', route: Appointments_routes_1.appointmentRoutes },
    { path: '/service', route: Services_routes_1.serviceRoutes },
    { path: '/admin', route: Admins_routes_1.adminRoutes },
    { path: '/patient', route: Patients_routes_1.patientRoutes },
    { path: '/availableDoctor', route: AvailableDoctor_routers_1.availableDoctorRoutes },
    { path: '/availableService', route: AvailableService_routers_1.availableServiceRoutes },
    { path: '/payment', route: Payment_routers_1.paymentRoutes },
    { path: '/medicalProfile', route: MedicalProfile_routers_1.medicalProfileRoutes },
    { path: '/timeSlot', route: TimeSlot_routers_1.timeSlotRoutes }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
