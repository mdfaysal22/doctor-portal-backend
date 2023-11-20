import express from 'express';
import { medicalProfileController } from './MedicalProfile.controller';

const routes = express.Router();

// routes.post("/create", medicalProfileController.create);
routes.get("/", medicalProfileController.getAll);
routes.get("/:id", medicalProfileController.get);
routes.patch("/update/:id", medicalProfileController.modified);
routes.delete("/remove/:id", medicalProfileController.remove);


export const medicalProfileRoutes = routes;