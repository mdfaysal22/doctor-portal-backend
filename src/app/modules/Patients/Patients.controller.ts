import { NextFunction, Request, Response } from "express";
import { patientServices } from "./Patients.service";

const createPatient = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const { medicalProfile, ...patientData} = req.body;
        const result = await patientServices.createPatient(patientData, medicalProfile);
        res.status(200).json({
            status: 200,
            message: "Patient Create Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getPatients = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const result = await patientServices.getPatients();
        res.status(200).json({
            status: 200,
            message: "Patient get Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
};

const getPatient = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await patientServices.getPatient(id);
        res.status(200).json({
            status: 200,
            message: "Patient get Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const updatePatient = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const payload = req.body;
        const result = await patientServices.updatePatient(id, payload);
        res.status(200).json({
            status: 200,
            message: "Patient update Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const deletePatient = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await patientServices.deletePatient(id);
        res.status(200).json({
            status: 200,
            message: "Patient delete Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
};


export const patientControllers = {
    createPatient,
    getPatient,
    getPatients,
    updatePatient,
    deletePatient
}