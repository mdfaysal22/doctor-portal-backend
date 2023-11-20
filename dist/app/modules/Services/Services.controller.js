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
exports.servicesController = void 0;
const Services_service_1 = require("./Services.service");
const createService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield Services_service_1.servicesService.createServices(data);
        res.status(200).json({
            status: 200,
            message: "Service Create Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getServices = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Services_service_1.servicesService.getServices();
        res.status(200).json({
            status: 200,
            message: "Service Create Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Services_service_1.servicesService.getService(id);
        res.status(200).json({
            status: 200,
            message: "Service Create Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = yield Services_service_1.servicesService.updateService(id, payload);
        res.status(200).json({
            status: 200,
            message: "Service Create Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const removeService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Services_service_1.servicesService.removeService(id);
        res.status(200).json({
            status: 200,
            message: "Service Create Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.servicesController = {
    createService,
    getServices,
    getService,
    updateService,
    removeService
};
