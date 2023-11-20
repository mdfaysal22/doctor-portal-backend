"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specializationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Specializations_controller_1 = require("./Specializations.controller");
const router = express_1.default.Router();
router.post("/create", Specializations_controller_1.specializationController.createSpecialization);
router.get("/", Specializations_controller_1.specializationController.getSpecializations);
router.get("/:id", Specializations_controller_1.specializationController.getSpecialization);
router.patch("/:id", Specializations_controller_1.specializationController.updateSpecialization);
router.delete("/:id", Specializations_controller_1.specializationController.deleteSpecialization);
exports.specializationRoutes = router;
