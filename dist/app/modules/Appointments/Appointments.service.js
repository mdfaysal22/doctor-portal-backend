"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentService = void 0;
const prisma_client_1 = __importDefault(require("../../lib/prisma.client"));
const bookAppointment = (patientId, availableServiceId, appointmentDate) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO Check Available Service 
    const availableService = yield prisma_client_1.default.availableService.findUnique({
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
    const booking = yield prisma_client_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const appointment = yield transactionClient.appointment.create({
            data: {
                patientId,
                availableServiceId,
                appointmentDate,
                status: 'pending',
            }
        });
        yield transactionClient.availableService.update({
            where: {
                id: availableServiceId
            },
            data: {
                availableSeats: availableService.availableSeats - 1,
                isBooked: availableService.availableSeats - 1 === 0 ? true : false
            }
        });
        const paymentCreate = yield transactionClient.payment.create({
            data: {
                amount: availableService.fees,
                appointmentId: appointment.id,
                paymentStatus: "pending"
            }
        });
        return {
            appointment,
            paymentCreate
        };
    }));
    return booking;
});
const cancelAppointment = (appointmentId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield prisma_client_1.default.appointment.findUnique({
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
    const cancelledAppointment = yield prisma_client_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const appointmentCancel = yield transactionClient.appointment.update({
            where: {
                id: appointmentId
            },
            data: {
                status: "cancel"
            }
        });
        const availableService = yield prisma_client_1.default.availableService.findUnique({
            where: {
                id: appointment.availableServiceId
            }
        });
        yield transactionClient.availableService.update({
            where: {
                id: appointment.availableServiceId
            },
            data: {
                availableSeats: (availableService === null || availableService === void 0 ? void 0 : availableService.availableSeats) && availableService.availableSeats + 1,
                isBooked: availableService && availableService.availableSeats + 1 > 0 ? false : true
            }
        });
        yield transactionClient.payment.update({
            where: {
                appointmentId
            },
            data: {
                paymentStatus: "cancelled"
            }
        });
        return {
            appointmentCancel
        };
    }));
    return cancelledAppointment;
});
const startAppointment = (appointmentId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield prisma_client_1.default.appointment.findUnique({
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
    const startToAppointment = yield prisma_client_1.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.payment.update({
            where: {
                appointmentId
            },
            data: {
                paymentStatus: "paid",
                paymentDate: new Date().toISOString()
            }
        });
        const appointmentToStart = yield transactionClient.appointment.update({
            where: {
                id: appointmentId
            },
            data: {
                status: 'started'
            }
        });
        if (!appointmentToStart) {
            yield transactionClient.payment.update({
                where: {
                    appointmentId
                },
                data: {
                    paymentStatus: "refund"
                }
            });
        }
        return appointment;
        //TODO [But I Don't Understand] return appointment**
        //! return appointmentToStart 
    }));
    return startToAppointment;
});
const finishedAppointment = (appointmentId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield prisma_client_1.default.appointment.findUnique({
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
    const appointmentFinished = yield prisma_client_1.default.appointment.update({
        where: {
            id: appointmentId
        },
        data: {
            status: 'finish'
        }
    });
    return appointmentFinished;
});
const getAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.appointment.findMany();
    return result;
});
const getAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.appointment.findUnique({
        where: {
            id
        }
    });
    return result;
});
const updateAppointment = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.appointment.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
const deleteAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_client_1.default.appointment.delete({
        where: {
            id
        }
    });
    return result;
});
exports.appointmentService = {
    bookAppointment,
    cancelAppointment,
    startAppointment,
    finishedAppointment,
    getAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment
};
