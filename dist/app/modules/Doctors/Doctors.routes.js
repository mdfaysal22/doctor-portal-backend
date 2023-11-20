"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Doctors_controller_1 = require("./Doctors.controller");
const router = express_1.default.Router();
router.post("/create-doctor", Doctors_controller_1.doctorController.createDoctor);
router.get("/", Doctors_controller_1.doctorController.getDoctors);
router.get("/:id", Doctors_controller_1.doctorController.getDoctor);
router.patch("/update-doctor/:id", Doctors_controller_1.doctorController.updateDoctor);
router.delete("/remove-doctor/:id", Doctors_controller_1.doctorController.deleteDoctor);
exports.doctorRoutes = router;
