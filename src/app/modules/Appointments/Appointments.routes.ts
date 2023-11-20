import express from 'express';
import { appointmentController } from './Appointments.controller';

const routes = express.Router();


routes.post("/book-appointment", appointmentController.bookAppointment);
routes.patch("/cancelled-appointment/:id", appointmentController.cancelledAppointment);
routes.patch("/started-appointment/:id", appointmentController.startAppointment);
routes.patch("/finished-appointment/:id", appointmentController.finishedAppointment);
routes.get("/", appointmentController.getAppointments);
routes.get("/:id", appointmentController.getAppointment);
routes.patch("/update/:id", appointmentController.updateAppointment);
routes.delete("/remove/:id", appointmentController.deleteAppointment);


export const appointmentRoutes = routes;