import express from 'express';
import { specializationController } from './Specializations.controller';

const router = express.Router();

router.post("/create", specializationController.createSpecialization);
router.get("/", specializationController.getSpecializations);
router.get("/:id", specializationController.getSpecialization);
router.patch("/:id", specializationController.updateSpecialization);
router.delete("/:id", specializationController.deleteSpecialization);

export const specializationRoutes = router;