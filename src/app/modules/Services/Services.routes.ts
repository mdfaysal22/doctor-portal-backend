import express from 'express';
import { servicesController } from './Services.controller';

const routes = express.Router();

routes.post("/create-service", servicesController.createService);
routes.get("/", servicesController.getServices);
routes.get("/:id", servicesController.getService);
routes.patch("/update/:id", servicesController.updateService);
routes.delete("/remove/:id", servicesController.removeService);

export const serviceRoutes = routes;