"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.availableDoctorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const AvailableDoctor_controller_1 = require("./AvailableDoctor.controller");
const routes = express_1.default.Router();
routes.post("/create-availableDoctor", AvailableDoctor_controller_1.availableDoctorControllers.createAvailableDoctor);
routes.get("/", AvailableDoctor_controller_1.availableDoctorControllers.getAvailableDoctors);
routes.get("/:id", AvailableDoctor_controller_1.availableDoctorControllers.getAvailableDoctor);
routes.patch("/update/:id", AvailableDoctor_controller_1.availableDoctorControllers.updateAvailableDoctor);
routes.delete("/remove/:id", AvailableDoctor_controller_1.availableDoctorControllers.deleteAvailableDoctor);
exports.availableDoctorRoutes = routes;
