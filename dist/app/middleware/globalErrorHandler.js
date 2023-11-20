"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = http_status_1.default.BAD_REQUEST;
    let name = "Error";
    let message = config_1.default.env === "development" ? error.message : "Something went wrong";
    if (config_1.default.env === "development") {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            name = error.name;
            statusCode = http_status_1.default.BAD_REQUEST;
            const lines = error.message.trim().split("\n");
            message = lines[lines.length - 1];
        }
        else if (error instanceof client_1.Prisma.PrismaClientValidationError) {
            name = error.name;
            statusCode = http_status_1.default.BAD_REQUEST;
            const lines = error.message.trim().split("\n");
            message = lines[lines.length - 1];
        }
        else if (error instanceof Error) {
            statusCode = http_status_1.default.BAD_REQUEST;
            message = error.message;
        }
    }
    res.status(statusCode).json({
        success: false,
        name,
        message
    });
};
exports.globalErrorHandler = globalErrorHandler;
