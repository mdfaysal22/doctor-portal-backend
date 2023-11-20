"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicalProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const MedicalProfile_controller_1 = require("./MedicalProfile.controller");
const routes = express_1.default.Router();
// routes.post("/create", medicalProfileController.create);
routes.get("/", MedicalProfile_controller_1.medicalProfileController.getAll);
routes.get("/:id", MedicalProfile_controller_1.medicalProfileController.get);
routes.patch("/update/:id", MedicalProfile_controller_1.medicalProfileController.modified);
routes.delete("/remove/:id", MedicalProfile_controller_1.medicalProfileController.remove);
exports.medicalProfileRoutes = routes;
