"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Services_controller_1 = require("./Services.controller");
const routes = express_1.default.Router();
routes.post("/create-service", Services_controller_1.servicesController.createService);
routes.get("/", Services_controller_1.servicesController.getServices);
routes.get("/:id", Services_controller_1.servicesController.getService);
routes.patch("/update/:id", Services_controller_1.servicesController.updateService);
routes.delete("/remove/:id", Services_controller_1.servicesController.removeService);
exports.serviceRoutes = routes;
