import { AvailableDoctor } from "@prisma/client";
import prisma from "../../lib/prisma.client";


const createAvailableDoctor = async(data: AvailableDoctor) : Promise<AvailableDoctor | null> => {
    const result = await prisma.availableDoctor.create({
        data
    })

    return result;
};

const getAvailableDoctors = async() : Promise<AvailableDoctor[] | null> => {
    const result = await prisma.availableDoctor.findMany({
        include: {
            doctor: true,
            timeSlot: true,
            availableServices: true
        }
    });
    return result;
};

const getAvailableDoctor = async(id: string) : Promise<AvailableDoctor|null> => {
    const result = await prisma.availableDoctor.findUnique({
        where: {
            id
        },
        include: {
            doctor: true,
            timeSlot: true,
            availableServices: true
        }
    })

    return result
};

const updateAvailableDoctor = async(id:string, payload: Partial<AvailableDoctor>) : Promise<Partial<AvailableDoctor>> => {
    const result = await prisma.availableDoctor.update({
        where: {
            id
        },
        data: payload
    })

    return result;
};


const deleteAvailableDoctor = async(id:string) : Promise<AvailableDoctor> =>{
    const result = await prisma.availableDoctor.delete({
        where: {
            id
        }
    });

    return result;
};


export const availableDoctorServices = {
    createAvailableDoctor,
    getAvailableDoctor,
    getAvailableDoctors,
    updateAvailableDoctor,
    deleteAvailableDoctor
}