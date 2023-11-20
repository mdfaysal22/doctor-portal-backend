import { NextFunction, Request, Response } from "express";
import { adminServices } from "./Admins.service";

const createAdmin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result  = await adminServices.createAdmin(data)
        res.status(200).json({
            status: 200,
            message: "Admin create Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getAdmins = async(req: Request, res: Response, next: NextFunction) => {
    try {
        
        const result  = await adminServices.getAdmins()
        res.status(200).json({
            status: 200,
            message: "Admins get Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const getAdmin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result  = await adminServices.getAdmin(id)
        res.status(200).json({
            status: 200,
            message: "Admin get Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const updateAdmin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const payload = req.body;
        const result  = await adminServices.updateAdmin(id, payload)
        res.status(200).json({
            status: 200,
            message: "Admin update Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}
const deleteAdmin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result  = await adminServices.deleteAdmin(id)
        res.status(200).json({
            status: 200,
            message: "Admin delete Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
};

export const adminController = {
    createAdmin,
    getAdmins,
    getAdmin,
    updateAdmin,
    deleteAdmin
}