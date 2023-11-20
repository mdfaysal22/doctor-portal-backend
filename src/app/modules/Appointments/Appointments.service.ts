import { Appointment } from "@prisma/client"
import prisma from "../../lib/prisma.client"

const bookAppointment = async (patientId: string, availableServiceId: string, appointmentDate: string): Promise<any> => {

    // TODO Check Available Service 

    const availableService = await prisma.availableService.findUnique({
        where: {
            id: availableServiceId
        }
    });

    if (!availableService) {
        throw new Error("Available service not found");
    }
    if (availableService.availableSeats === 0) {
        throw new Error("No seats left for this appointment");
    }
    const booking = await prisma.$transaction(async transactionClient => {
        const appointment = await transactionClient.appointment.create({
            data: {
                patientId,
                availableServiceId,
                appointmentDate,
                status: 'pending',
            }
        })
        await transactionClient.availableService.update({
            where: {
                id: availableServiceId
            },
            data: {
                availableSeats: availableService.availableSeats - 1,
                isBooked: availableService.availableSeats - 1 === 0 ? true : false
            }
        })

        const paymentCreate = await transactionClient.payment.create({
            data: {
                amount: availableService.fees,
                appointmentId: appointment.id,
                paymentStatus: "pending"
            }
        })

        return {
            appointment,
            paymentCreate
        }
    })

    return booking;
};


const cancelAppointment = async (appointmentId: string): Promise<any> => {
    const appointment = await prisma.appointment.findUnique({
        where: {
            id: appointmentId
        }
    });

    if (!appointment) {
        throw new Error('Appointment Not Founded !!!');
    }
    if (appointment.status === "cancel") {
        throw new Error("This Appointment has been Cancelled");
    }
    if (appointment.status === "finish") {
        throw new Error("You can't Cancel this Appointment because it has already finished");
    }

    const cancelledAppointment = await prisma.$transaction(async transactionClient => {
        const appointmentCancel = await transactionClient.appointment.update({
            where: {
                id: appointmentId
            },
            data: {
                status: "cancel"
            }
        })
        const availableService = await prisma.availableService.findUnique({
            where: {
                id: appointment.availableServiceId
            }
        })
        await transactionClient.availableService.update({
            where: {
                id: appointment.availableServiceId
            },
            data: {
                availableSeats: availableService?.availableSeats && availableService.availableSeats + 1,
                isBooked: availableService && availableService.availableSeats + 1 > 0 ? false : true
            }
        })
        await transactionClient.payment.update({
            where: {
                appointmentId
            },
            data: {
                paymentStatus: "cancelled"
            }
        })

        return {
            appointmentCancel
        }

    })

    return cancelledAppointment
}


const startAppointment = async (appointmentId: string): Promise<any> => {
    const appointment = await prisma.appointment.findUnique({
        where: {
            id: appointmentId
        }
    })

    if (!appointment) {
        throw new Error('Appointment Not Founded !!!');
    }
    if (appointment.status === "cancel") {
        throw new Error("This Appointment has been Cancelled");
    }
    if (appointment.status === "finish") {
        throw new Error("You can't Cancel this Appointment because it has already finished");
    }

    const startToAppointment = await prisma.$transaction(async transactionClient => {
        await transactionClient.payment.update({
            where: {
                appointmentId
            },
            data: {
                paymentStatus: "paid",
                paymentDate: new Date().toISOString()
            }
        })

        const appointmentToStart = await transactionClient.appointment.update({
            where: {
                id: appointmentId
            },
            data: {
                status: 'started'
            }
        })
        if (!appointmentToStart) {
            await transactionClient.payment.update({
                where: {
                    appointmentId
                },
                data: {
                    paymentStatus: "refund"
                }
            })
        }

        return appointment
        //TODO [But I Don't Understand] return appointment**
        //! return appointmentToStart 

    })
    return startToAppointment

}

const finishedAppointment = async(appointmentId:string) : Promise<any> => {
    const appointment = await prisma.appointment.findUnique({
        where: {
            id: appointmentId
        }
    })
    if (!appointment) {
        throw new Error('Appointment Not Founded !!!');
    }
    if (appointment.status === "cancel") {
        throw new Error("This Appointment has been Cancelled");
    }
    if (appointment.status === "finish") {
        throw new Error("You can't Cancel this Appointment because it has already finished");
    }

    const appointmentFinished = await prisma.appointment.update({
        where: {
            id: appointmentId
        },
        data: {
            status: 'finish'
        }
    })
    return appointmentFinished
}

const getAppointments = async (): Promise<Appointment[] | null> => {
    const result = await prisma.appointment.findMany();
    return result;
};

const getAppointment = async (id: string): Promise<Appointment | null> => {
    const result = await prisma.appointment.findUnique({
        where: {
            id
        }
    });
    return result;
};

const updateAppointment = async (id: string, payload: Partial<Appointment>): Promise<Partial<Appointment>> => {
    const result = await prisma.appointment.update({
        where: {
            id
        },
        data: payload
    });
    return result;
};


const deleteAppointment = async (id: string): Promise<Appointment> => {
    const result = await prisma.appointment.delete({
        where: {
            id
        }
    });
    return result
}


export const appointmentService = {
    bookAppointment,
    cancelAppointment,
    startAppointment,
    finishedAppointment,
    getAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment
}
