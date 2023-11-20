import { NextFunction, Request, Response } from "express";
import { availableDoctorServices } from "./AvailableDoctor.service";

const createAvailableDoctor = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await availableDoctorServices.createAvailableDoctor(data);
        res.status(200).json({
            statusCode : 200 ,
            message : 'success',
            data : result
        })
    } catch (error) {
        next(error)
    }
};
const getAvailableDoctors = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const result = await availableDoctorServices.getAvailableDoctors();
        res.status(200).json({
            statusCode : 200 ,
            message : 'success',
            data : result
        })
    } catch (error) {
        next(error)
    }
};
const getAvailableDoctor = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await availableDoctorServices.getAvailableDoctor(id);
        res.status(200).json({
            statusCode : 200 ,
            message : 'success',
            data : result
        })
    } catch (error) {
        next(error)
    }
};
const updateAvailableDoctor = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const data = req.body;
        const result = await availableDoctorServices.updateAvailableDoctor(id, data);
        res.status(200).json({
            statusCode : 200 ,
            message : 'success',
            data : result
        })
    } catch (error) {
        next(error)
    }
};
const deleteAvailableDoctor = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await availableDoctorServices.deleteAvailableDoctor(id);
        res.status(200).json({
            statusCode : 200 ,
            message : 'success',
            data : result
        })
    } catch (error) {
        next(error)
    }
};

export const availableDoctorControllers = {
    createAvailableDoctor,
    getAvailableDoctors,
    getAvailableDoctor,
    updateAvailableDoctor,
    deleteAvailableDoctor
}