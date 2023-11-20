"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.availableServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const AvailableService_controller_1 = require("./AvailableService.controller");
const routes = express_1.default.Router();
routes.post("/create", AvailableService_controller_1.availableServiceController.create);
routes.get("/", AvailableService_controller_1.availableServiceController.getAll);
routes.get("/:id", AvailableService_controller_1.availableServiceController.get);
routes.patch("/update/:id", AvailableService_controller_1.availableServiceController.modified);
routes.delete("/remove/:id", AvailableService_controller_1.availableServiceController.remove);
exports.availableServiceRoutes = routes;
