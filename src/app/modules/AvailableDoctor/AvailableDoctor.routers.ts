import express from 'express';
import { availableDoctorControllers } from './AvailableDoctor.controller';

const routes = express.Router();


routes.post("/create-availableDoctor", availableDoctorControllers.createAvailableDoctor);
routes.get("/", availableDoctorControllers.getAvailableDoctors);
routes.get("/:id", availableDoctorControllers.getAvailableDoctor);
routes.patch("/update/:id", availableDoctorControllers.updateAvailableDoctor);
routes.delete("/remove/:id", availableDoctorControllers.deleteAvailableDoctor);


export const availableDoctorRoutes = routes;