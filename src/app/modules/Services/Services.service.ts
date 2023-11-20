import { Service } from "@prisma/client";
import prisma from "../../lib/prisma.client";

const createServices = async(data: Service): Promise<Service | null> => {
    const result = await prisma.service.create({
        data
    });

    return result;
};

const getServices = async() : Promise<Service[] | null> => {
    const result = await prisma.service.findMany({
        include: {
            specialization: true
        }
    });
    return result;
};

const getService = async(id: string) : Promise<Service | null> => {
    const result = await prisma.service.findUnique({
        where:{ id },
        include: {
            specialization: true
        }
    });

    return result;
};

const updateService = async(id: string, payload: Partial<Service>) : Promise<Partial<Service>> => {
    const result = await prisma.service.update({
        where: {
            id
        },
        data: payload
    });

    return result;
};


const removeService = async(id:string) : Promise<Service> => {
    const result = await prisma.service.delete({
        where: {
            id
        }
    });
    return result;
}

export const servicesService = {
    createServices,
    getServices,
    getService,
    updateService,
    removeService
}