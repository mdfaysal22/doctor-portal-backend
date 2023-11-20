"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const Specializations_routes_1 = require("../modules/Specializations/Specializations.routes");
const Doctors_routes_1 = require("../modules/Doctors/Doctors.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    { path: '/specialization', route: Specializations_routes_1.specializationRoutes },
    { path: '/doctor', route: Doctors_routes_1.doctorRoutes }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
