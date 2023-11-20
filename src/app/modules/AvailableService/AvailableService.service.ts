import { AvailableService } from "@prisma/client";
import prisma from "../../lib/prisma.client";


const create = async(data: AvailableService) : Promise<AvailableService> => {
    const result = await prisma.availableService.create({
        data
    });

    return result;
}

const getAll = async() : Promise<AvailableService[] | null> => {
    const result = await prisma.availableService.findMany();
    return result
};

const get = async(id: string): Promise<AvailableService | null> => {
    const result = await prisma.availableService.findUnique({
        where:{ id }
    });
    return result
};


const update = async(id: string, payload: Partial<AvailableService>) : Promise<Partial<AvailableService>> => {
    const result = await prisma.availableService.update({
        where: {
            id
        },
        data: payload
    });

    return result;
};


const deleteData = async(id:string) : Promise<AvailableService> => {
    const result = await prisma.availableService.delete({
        where: {id}
    });

    return result

}

export const availableServiceServices = {
    create,
    getAll,
    get,
    update,
    deleteData
}