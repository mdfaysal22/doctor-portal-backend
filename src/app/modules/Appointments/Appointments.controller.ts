import { NextFunction, Request, Response } from "express";
import { appointmentService } from "./Appointments.service";


const bookAppointment = async(req : Request, res: Response, next: NextFunction) => {
    try {
        const {patientId, availableServiceId, appointmentDate} = req.body;
        const result = await appointmentService.bookAppointment(patientId, availableServiceId, appointmentDate);
        res.status(200).json({
            status: 200,
            message: "Appointment Create Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}




const startAppointment = async(req : Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await appointmentService.startAppointment(id);
        res.status(200).json({
            status: 200,
            message: "Appointment Started Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const cancelledAppointment = async(req : Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await appointmentService.cancelAppointment(id);
        res.status(200).json({
            status: 200,
            message: "Appointment cancelled Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}


const finishedAppointment = async(req : Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await appointmentService.finishedAppointment(id);
        res.status(200).json({
            status: 200,
            message: "Appointment Successfully Finished",
            data: result
        })
    } catch (error) {
        next(error)
    }
}


const getAppointments = async(req : Request, res: Response, next: NextFunction) => {
    try {
        const result = await appointmentService.getAppointments();
        res.status(200).json({
            status: 200,
            message: "Appointments get Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getAppointment = async(req : Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const result = await appointmentService.getAppointment(id)
        res.status(200).json({
            status: 200,
            message: "Appointment get Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const updateAppointment = async(req : Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const payload = req.body;
        const result = await appointmentService.updateAppointment(id, payload)
        res.status(200).json({
            status: 200,
            message: "Appointment Update Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const deleteAppointment = async(req : Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await appointmentService.deleteAppointment(id);
        res.status(200).json({
            status: 200,
            message: "Appointment Remove Success",
            data: result
        })
    } catch (error) {
        next(error)
    }
};


export const appointmentController = {
    bookAppointment,
    cancelledAppointment,
    startAppointment,
    finishedAppointment,
    getAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment
};
