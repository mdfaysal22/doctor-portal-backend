import express from 'express';
import { availableServiceController } from './AvailableService.controller';

const routes = express.Router();

routes.post("/create", availableServiceController.create);
routes.get("/", availableServiceController.getAll);
routes.get("/:id", availableServiceController.get);
routes.patch("/update/:id", availableServiceController.modified);
routes.delete("/remove/:id", availableServiceController.remove);


export const availableServiceRoutes = routes;