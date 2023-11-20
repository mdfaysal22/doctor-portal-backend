import { Doctor } from "@prisma/client"

export interface IDoctorResult {
    meta : {
        total: number,
        pages: number,
        page: number 
    },
    data : Doctor[]
}