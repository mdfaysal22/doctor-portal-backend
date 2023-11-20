import express from 'express';
import { patientControllers } from './Patients.controller';

const routes = express.Router();

routes.post("/create-patient", patientControllers.createPatient);
routes.get("/", patientControllers.getPatients)
routes.get("/:id", patientControllers.getPatient)
routes.patch("/update-patient/:id", patientControllers.updatePatient)
routes.delete("/remove/:id", patientControllers.deletePatient)


export const patientRoutes = routes;