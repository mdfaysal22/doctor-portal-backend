import { Payment } from "@prisma/client";
import prisma from "../../lib/prisma.client";


// const create = async(data: Payment) : Promise<Payment> => {
//     const result = await prisma.payment.create({
//         data
//     });

//     return result;
// }

const getAll = async() : Promise<Payment[] | null> => {
    const result = await prisma.payment.findMany();
    return result
}

const get = async(id: string): Promise<Payment | null> => {
    const result = await prisma.payment.findUnique({
        where:{ id }
    });
    return result
};


const update = async(id: string, payload: Partial<Payment>) : Promise<Partial<Payment>> => {
    const result = await prisma.payment.update({
        where: {
            id
        },
        data: payload
    });

    return result;
};


const deleteData = async(id:string) : Promise<Payment> => {
    const result = await prisma.payment.delete({
        where: {id}
    });

    return result

};

export const paymentServices = {
    // create,
    getAll,
    get,
    update,
    deleteData
}