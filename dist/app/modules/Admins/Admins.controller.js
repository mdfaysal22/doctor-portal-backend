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
exports.adminController = void 0;
const Admins_service_1 = require("./Admins.service");
const createAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield Admins_service_1.adminServices.createAdmin(data);
        res.status(200).json({
            status: 200,
            message: "Admin create Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAdmins = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Admins_service_1.adminServices.getAdmins();
        res.status(200).json({
            status: 200,
            message: "Admins get Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Admins_service_1.adminServices.getAdmin(id);
        res.status(200).json({
            status: 200,
            message: "Admin get Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = yield Admins_service_1.adminServices.updateAdmin(id, payload);
        res.status(200).json({
            status: 200,
            message: "Admin update Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Admins_service_1.adminServices.deleteAdmin(id);
        res.status(200).json({
            status: 200,
            message: "Admin delete Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.adminController = {
    createAdmin,
    getAdmins,
    getAdmin,
    updateAdmin,
    deleteAdmin
};
