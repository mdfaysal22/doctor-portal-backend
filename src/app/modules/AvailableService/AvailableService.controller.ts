import { NextFunction, Request, Response } from "express";
import { availableServiceServices } from "./AvailableService.service";

const create = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await availableServiceServices.create(data);
        res.status(200).json({
            status: 200,
            message: "Create Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getAll = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await availableServiceServices.getAll();
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
        const result = await availableServiceServices.get(id);
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
        const result = await availableServiceServices.update(id, payload);
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
        const result = await availableServiceServices.deleteData(id);
        res.status(200).json({
            status: 200,
            message:"remove Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export const availableServiceController = {
    create,
    getAll,
    get,
    modified,
    remove
}