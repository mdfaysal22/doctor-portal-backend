import express from 'express';
import { adminController } from './Admins.controller';

const routes = express.Router();


routes.post("/create-admin", adminController.createAdmin);
routes.get("/", adminController.getAdmins);
routes.get("/:id", adminController.getAdmin);
routes.patch("/update/:id", adminController.updateAdmin);
routes.delete("/remove/:id", adminController.deleteAdmin);

export const adminRoutes = routes;