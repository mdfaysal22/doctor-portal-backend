import { TimeSlot } from "@prisma/client"
import prisma from "../../lib/prisma.client"

const create = async(data: TimeSlot) : Promise<TimeSlot> => {
    const result = await prisma.timeSlot.create({
        data
    });

    return result;
};

const getAll = async() : Promise<TimeSlot[] | null> => {
    const result = await prisma.timeSlot.findMany({
        include: {
            availableServices: true,
            availableDoctors: true,
        }
    });
    return result
};

const get = async(id: string): Promise<TimeSlot | null> => {
    const result = await prisma.timeSlot.findUnique({
        where:{ id },
        include: {
            availableDoctors: true,
            availableServices: true
        }
    });
    return result
};


const update = async(id: string, payload: Partial<TimeSlot>) : Promise<Partial<TimeSlot>> => {
    const result = await prisma.timeSlot.update({
        where: {
            id
        },
        data: payload
    });

    return result;
};


const deleteData = async(id:string) : Promise<TimeSlot> => {
    const result = await prisma.timeSlot.delete({
        where: {id}
    });

    return result

}

export const timeSlotServices = {
    create,
    getAll,
    get,
    update,
    deleteData
}