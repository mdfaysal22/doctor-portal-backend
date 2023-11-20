import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"
import config from "../../config";

export const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = httpStatus.BAD_REQUEST;
    let name = "Error"
    let message = config.env === "development" ? error.message : "Something went wrong";
    if(config.env === "development"){
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            name = error.name
            statusCode = httpStatus.BAD_REQUEST
            const lines = error.message.trim().split("\n")
            message = lines[lines.length-1]
        }else if(error instanceof Prisma.PrismaClientValidationError) {
            name = error.name
            statusCode = httpStatus.BAD_REQUEST
            const lines = error.message.trim().split("\n")
            message = lines[lines.length-1]
        }
        else if(error instanceof Error){
            statusCode = httpStatus.BAD_REQUEST
            message = error.message
        }
    }
    res.status(statusCode).json({
        success : false,
        name,
        message
      })
    
    
  }