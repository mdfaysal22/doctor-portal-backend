import { NextFunction, Request, Response } from "express";
import { servicesService } from "./Services.service";


const createService = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await servicesService.createServices(data);
        res.status(200).json({
            status: 200,
            message: "Service Create Success",
            data: result
        })
    } catch (error) {
        next(error);
    }
}


const getServices = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const result = await servicesService.getServices();
        res.status(200).json({
            status: 200,
            message: "Service Create Success",
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const getService = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await servicesService.getService(id);
        res.status(200).json({
            status: 200,
            message: "Service Create Success",
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const updateService = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const payload = req.body;
        const result = await servicesService.updateService(id, payload);
        res.status(200).json({
            status: 200,
            message: "Service Create Success",
            data: result
        })
    } catch (error) {
        next(error);
    }
}

const removeService = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await servicesService.removeService(id);
        res.status(200).json({
            status: 200,
            message: "Service Create Success",
            data: result
        })
    } catch (error) {
        next(error);
    }
}

export const servicesController = {
    createService,
    getServices,
    getService,
    updateService,
    removeService
}