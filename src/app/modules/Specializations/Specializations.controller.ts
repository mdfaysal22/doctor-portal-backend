import { NextFunction, Request, Response } from "express";
import { specializationServices } from "./Specializations.services";


const createSpecialization = async(req : Request, res : Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await specializationServices.createSpecialization(data);
        res.status(200).json({
            status: 200,
            message: "create Specialization Successfully",
            data : result
        })
    } catch (error) {
        next(error)
    }
};

const getSpecializations = async(req : Request, res : Response, next: NextFunction) => {
    try {
        const result = await specializationServices.getSpecializations();
        if(!result){
            throw new Error("No Data Found");
        }else{
            res.status(200).json({
                status: 200,
                message: "Get All Specialization Successfully",
                data : result
            });
        
        }
    } catch (error) {
        next(error)
    }
}


const getSpecialization = async(req : Request, res : Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const result = await specializationServices.getSpecialization(id);
        if(!result){
            throw new Error("No Data Found");
        }else{
            res.status(200).json({
                status: 200,
                message: "Get Specialization Successfully",
                data : result
            });
        
        }
    } catch (error) {
        next(error)
    }
};


const updateSpecialization = async(req : Request, res : Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const payload = req.body;
        const result = await specializationServices.updateSpecialization(id, payload);
        if(!result){
            throw new Error("Update Failed");
        }else{
            res.status(201).json({
                status: 201,
                message: "Updated Successfully",
                data : result
            })
        }
    } catch (error) {
        next(error)
    }
};


const deleteSpecialization = async(req : Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await specializationServices.deleteSpecialization(id);
        if(!result){
            throw new Error("Delete Failed");
        }else{
            res.status(201).json({
                status: 201,
                message: "Delete Successfully",
                data : result
            })
        }
    } catch (error) {
        next(error)
    }
}

export const specializationController = {
    createSpecialization,
    getSpecializations,
    getSpecialization,
    updateSpecialization,
    deleteSpecialization
};