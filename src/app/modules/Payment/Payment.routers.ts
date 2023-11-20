import express from 'express';
import { paymentController } from './Payment.controller';


const routes = express.Router();

// routes.post("/create", paymentController.create);
routes.get("/", paymentController.getAll);
routes.get("/:id", paymentController.get);
routes.patch("/update/:id", paymentController.modified);
routes.delete("/remove/:id", paymentController.remove);


export const paymentRoutes = routes;