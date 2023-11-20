import express from 'express';
import { timeSlotController } from './TimeSlot.controller';

const routes = express.Router();

routes.post("/create", timeSlotController.create);
routes.get("/", timeSlotController.getAll);
routes.get("/:id", timeSlotController.get);
routes.patch("/update/:id", timeSlotController.modified);
routes.delete("/remove/:id", timeSlotController.remove);


export const timeSlotRoutes = routes;