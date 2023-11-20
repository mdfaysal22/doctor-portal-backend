import { MedicalProfile, Patient } from "@prisma/client";
import prisma from "../../lib/prisma.client";

const createPatient = async(data: Patient, medicalProfile : MedicalProfile) : Promise<any> => {
    const result = await prisma.$transaction(async transactionClient => {
        const createPatient = await transactionClient.patient.create({
            data
        })
        const createMedicalProfile = await transactionClient.medicalProfile.create({
            data: {
                ...medicalProfile,
                patientId: createPatient.id,
                profileStatus: true
            }
        })

        return {
            createPatient,
            createMedicalProfile
        }
    })

    return result;
};

const getPatients = async() : Promise<Patient[] | null> => {
    const result = await prisma.patient.findMany();
    return result;
};

const getPatient = async(id:string) : Promise<Patient | null> => {
    const result = await prisma.patient.findUnique({
        where: {
            id
        },
        include:{
            medicalProfile: true,
            appointments: true
        }
    });

    return result;
};

const updatePatient = async(id:string, payload: Partial<Patient>) : Promise<Partial<Patient>> => {
    const result = await prisma.patient.update({
        where: {
            id
        },
        data: payload
    });

    return result;
};


const deletePatient =async (id:string) : Promise<Patient | null> => {
    const result = await prisma.patient.delete({
        where: {
            id
        }
    });
    return result
};


export const patientServices = {
    createPatient,
    getPatient,
    getPatients,
    updatePatient,
    deletePatient
}