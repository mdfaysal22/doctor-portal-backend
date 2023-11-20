"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specializationController = void 0;
const Specializations_services_1 = require("./Specializations.services");
const createSpecialization = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield Specializations_services_1.specializationServices.createSpecialization(data);
        res.status(200).json({
            status: 200,
            message: "create Specialization Successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getSpecializations = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Specializations_services_1.specializationServices.getSpecializations();
        if (!result) {
            throw new Error("No Data Found");
        }
        else {
            res.status(200).json({
                status: 200,
                message: "Get All Specialization Successfully",
                data: result
            });
        }
    }
    catch (error) {
        next(error);
    }
});
const getSpecialization = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield Specializations_services_1.specializationServices.getSpecialization(id);
        if (!result) {
            throw new Error("No Data Found");
        }
        else {
            res.status(200).json({
                status: 200,
                message: "Get Specialization Successfully",
                data: result
            });
        }
    }
    catch (error) {
        next(error);
    }
});
const updateSpecialization = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = yield Specializations_services_1.specializationServices.updateSpecialization(id, payload);
        if (!result) {
            throw new Error("Update Failed");
        }
        else {
            res.status(201).json({
                status: 201,
                message: "Updated Successfully",
                data: result
            });
        }
    }
    catch (error) {
        next(error);
    }
});
const deleteSpecialization = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Specializations_services_1.specializationServices.deleteSpecialization(id);
        if (!result) {
            throw new Error("Delete Failed");
        }
        else {
            res.status(201).json({
                status: 201,
                message: "Delete Successfully",
                data: result
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.specializationController = {
    createSpecialization,
    getSpecializations,
    getSpecialization,
    updateSpecialization,
    deleteSpecialization
};
