import { NextFunction, Request, Response } from "express";
import { doctorServices } from "./Doctors.services";

const createDoctor = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await doctorServices.createDoctor(data);
        
        res.status(201).json({
            status: 201,
            message: "Doctor Create Successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
};

const getDoctors = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {limit = 10, page = 1, sortBy = "createAt", sortOrder = "asc", searchTerm = "", ...filterData} = req.query; //default Value
        const {meta, data} = await doctorServices.getDoctors(
            searchTerm as string,
            Number(limit), 
            Number(page), 
            String(sortBy), 
            sortOrder as "asc" | "desc",
            filterData);
        res.status(201).json({

            status: 201,
            message: "Doctors gets Successfully",
            meta,
            data
        })
    } catch (error) {
        next(error)
    }
};

const getDoctor = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const result = await doctorServices.getDoctor(id);
        res.status(201).json({
            status: 201,
            message: "Doctor gets Successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const updateDoctor = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await doctorServices.updateDoctor(id, data);
        res.status(201).json({
            status: 201,
            message: "Doctor update Successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}


const deleteDoctor = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await doctorServices.deleteDoctor(id);
        res.status(201).json({
            status: 201,
            message: "Doctor remove Successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}


export const doctorController = {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
}