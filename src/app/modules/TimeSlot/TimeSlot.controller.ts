import { NextFunction, Request, Response } from "express";
import { timeSlotServices } from "./TimeSlot.service";

const create = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await timeSlotServices.create(data);
        res.status(200).json({
            status: 200,
            message: "Appointment Create Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getAll = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await timeSlotServices.getAll();
        res.status(200).json({
            status: 200,
            message: "get all Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}


const get = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await timeSlotServices.get(id);
        res.status(200).json({
            status: 200,
            message:"get Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const modified = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const payload = req.body;
        const result = await timeSlotServices.update(id, payload);
        res.status(200).json({
            status: 200,
            message:"modified Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const remove = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await timeSlotServices.deleteData(id);
        res.status(200).json({
            status: 200,
            message:"remove Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export const timeSlotController = {
    create,
    getAll,
    get,
    modified,
    remove
}