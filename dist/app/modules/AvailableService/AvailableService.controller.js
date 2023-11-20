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
exports.availableServiceController = void 0;
const AvailableService_service_1 = require("./AvailableService.service");
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield AvailableService_service_1.availableServiceServices.create(data);
        res.status(200).json({
            status: 200,
            message: "Create Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield AvailableService_service_1.availableServiceServices.getAll();
        res.status(200).json({
            status: 200,
            message: "get all Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield AvailableService_service_1.availableServiceServices.get(id);
        res.status(200).json({
            status: 200,
            message: "get Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const modified = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const result = yield AvailableService_service_1.availableServiceServices.update(id, payload);
        res.status(200).json({
            status: 200,
            message: "modified Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield AvailableService_service_1.availableServiceServices.deleteData(id);
        res.status(200).json({
            status: 200,
            message: "remove Success",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.availableServiceController = {
    create,
    getAll,
    get,
    modified,
    remove
};
