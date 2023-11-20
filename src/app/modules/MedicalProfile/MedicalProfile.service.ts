import { MedicalProfile } from "@prisma/client";
import prisma from "../../lib/prisma.client";

// const create = async(data:MedicalProfile) : Promise<MedicalProfile> => {
//     const result = await prisma.medicalProfile.create({
//         data
//     });

//     return result;
// }

const getAll = async() : Promise<MedicalProfile[] | null> => {
    const result = await prisma.medicalProfile.findMany();
    return result
};

const get = async(id: string): Promise<MedicalProfile | null> => {
    const result = await prisma.medicalProfile.findUnique({
        where:{ id }
    });
    return result
};


const update = async(id: string, payload: Partial<MedicalProfile>) : Promise<Partial<MedicalProfile>> => {
    const result = await prisma.medicalProfile.update({
        where: {
            id
        },
        data: payload
    });

    return result;
};


const deleteData = async(id:string) : Promise<MedicalProfile> => {
    const result = await prisma.medicalProfile.delete({
        where: {id}
    });

    return result

};


export const medicalProfileServices = {
    // create,
    getAll,
    get,
    update,
    deleteData
}