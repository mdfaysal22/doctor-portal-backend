import { Specialization } from "@prisma/client";
import prisma from "../../lib/prisma.client";




const createSpecialization = async (data: Specialization) => {
    const result = await prisma.specialization.create({
        data
    })
    return result
};

const getSpecializations = async (): Promise<Specialization[] | null> => {
    const result = await prisma.specialization.findMany({
        include: {
            doctors: true
        }
    });
    return result
};

const getSpecialization = async (id: string): Promise<Specialization | null> => {
    const result = await prisma.specialization.findUnique({
        where: {
            id
        },
        include: {
            doctors: true
        }
    })

    return result

}

const updateSpecialization = async(id: string, payload: Partial<Specialization>) : Promise<Partial<Specialization>> => {
    const result = await prisma.specialization.update({
        where:{
            id
        },
        data:payload})
    return result
}


const deleteSpecialization = async(id: string) : Promise<Specialization | null> => {
    const result = await prisma.specialization.delete({
        where : {
            id
        }
    });
    return result;
}

export const specializationServices = {
    createSpecialization,
    getSpecializations,
    getSpecialization,
    updateSpecialization,
    deleteSpecialization
}