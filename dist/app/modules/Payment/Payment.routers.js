"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Payment_controller_1 = require("./Payment.controller");
const routes = express_1.default.Router();
// routes.post("/create", paymentController.create);
routes.get("/", Payment_controller_1.paymentController.getAll);
routes.get("/:id", Payment_controller_1.paymentController.get);
routes.patch("/update/:id", Payment_controller_1.paymentController.modified);
routes.delete("/remove/:id", Payment_controller_1.paymentController.remove);
exports.paymentRoutes = routes;
