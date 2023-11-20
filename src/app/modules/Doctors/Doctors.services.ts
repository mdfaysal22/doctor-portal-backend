import { Doctor } from "@prisma/client";
import prisma from "../../lib/prisma.client";
import { IDoctorResult } from "../../../types/doctor.interface";

const createDoctor = async (data: Doctor): Promise<Doctor> => {
    const result = await prisma.doctor.create({
        data
    });
    if (!result) {
        console.log("Error")
    }
    return result;
};

const getDoctors = async (
    searchTerm: string,
    limit: number,
    page: number,
    sortBy: string,
    sortOrder: "asc" | "desc",
    filterData: any
): Promise<IDoctorResult> => {
    let offset = (page - 1) * limit;
    const result = await prisma.doctor.findMany({
        include: {
            // TODO Relation
            specialization: true
        },
        where: {
            // TODO Searching 
            OR: [
                {
                    fullName: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                },
                {
                    phoneNumber: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            ],
            specialization: {
                name: {
                    //TODO filtering
                    equals: filterData.specialization as string, 
                    mode: "insensitive"
                }
            }

        },
        take: limit, //TODO Data Show Limit  [default 10]
        skip: offset, //TODO pagination 
        orderBy: {
            [sortBy]: sortOrder //TODO sorting 
        }
    });
    const total = await prisma.doctor.count()
    return {
        meta: {
            page,
            pages: Math.ceil(total / limit),
            total
        },
        data: result
    };
}


const getDoctor = async (id: string): Promise<Doctor | null> => {
    const result = await prisma.doctor.findUnique({
        where: {
            id
        },
        include: {
            specialization: true
        }
    });

    return result
};

const updateDoctor = async (id: string, payload: Partial<Doctor>): Promise<Partial<Doctor>> => {
    const result = await prisma.doctor.update({
        where: {
            id
        },
        data: payload
    });

    return result
};

const deleteDoctor = async (id: string) => {
    const result = await prisma.doctor.delete({
        where: {
            id
        }
    });
    return result
}



export const doctorServices = {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
}