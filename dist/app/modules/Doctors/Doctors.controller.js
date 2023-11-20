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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorController = void 0;
const Doctors_services_1 = require("./Doctors.services");
const createDoctor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield Doctors_services_1.doctorServices.createDoctor(data);
        res.status(201).json({
            status: 201,
            message: "Doctor Create Successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const getDoctors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.query, { limit = 10, page = 1, sortBy = "createAt", sortOrder = "asc", searchTerm = "" } = _a, filterData = __rest(_a, ["limit", "page", "sortBy", "sortOrder", "searchTerm"]); //default Value
        const { meta, data } = yield Doctors_services_1.doctorServices.getDoctors(searchTerm, Number(limit), Number(page), String(sortBy), sortOrder, filterData);
        res.status(201).json({
            status: 201,
            message: "Doctors gets Successfully",
            meta,
            data
        });
    }
    catch (error) {
        next(error);
    }
});
const getDoctor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Doctors_services_1.doctorServices.getDoctor(id);
        res.status(201).json({
            status: 201,
            message: "Doctor gets Successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const updateDoctor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = yield Doctors_services_1.doctorServices.updateDoctor(id, data);
        res.status(201).json({
            status: 201,
            message: "Doctor update Successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteDoctor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Doctors_services_1.doctorServices.deleteDoctor(id);
        res.status(201).json({
            status: 201,
            message: "Doctor remove Successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
});
exports.doctorController = {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
};
