"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeSlotRoutes = void 0;
const express_1 = __importDefault(require("express"));
const TimeSlot_controller_1 = require("./TimeSlot.controller");
const routes = express_1.default.Router();
routes.post("/create", TimeSlot_controller_1.timeSlotController.create);
routes.get("/", TimeSlot_controller_1.timeSlotController.getAll);
routes.get("/:id", TimeSlot_controller_1.timeSlotController.get);
routes.patch("/update/:id", TimeSlot_controller_1.timeSlotController.modified);
routes.delete("/remove/:id", TimeSlot_controller_1.timeSlotController.remove);
exports.timeSlotRoutes = routes;
