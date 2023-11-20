"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Appointments_controller_1 = require("./Appointments.controller");
const routes = express_1.default.Router();
routes.post("/book-appointment", Appointments_controller_1.appointmentController.bookAppointment);
routes.patch("/cancelled-appointment/:id", Appointments_controller_1.appointmentController.cancelledAppointment);
routes.patch("/started-appointment/:id", Appointments_controller_1.appointmentController.startAppointment);
routes.patch("/finished-appointment/:id", Appointments_controller_1.appointmentController.finishedAppointment);
routes.get("/", Appointments_controller_1.appointmentController.getAppointments);
routes.get("/:id", Appointments_controller_1.appointmentController.getAppointment);
routes.patch("/update/:id", Appointments_controller_1.appointmentController.updateAppointment);
routes.delete("/remove/:id", Appointments_controller_1.appointmentController.deleteAppointment);
exports.appointmentRoutes = routes;
