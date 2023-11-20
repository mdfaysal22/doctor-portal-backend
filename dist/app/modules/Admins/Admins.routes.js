"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Admins_controller_1 = require("./Admins.controller");
const routes = express_1.default.Router();
routes.post("/create-admin", Admins_controller_1.adminController.createAdmin);
routes.get("/", Admins_controller_1.adminController.getAdmins);
routes.get("/:id", Admins_controller_1.adminController.getAdmin);
routes.patch("/update/:id", Admins_controller_1.adminController.updateAdmin);
routes.delete("/remove/:id", Admins_controller_1.adminController.deleteAdmin);
exports.adminRoutes = routes;
