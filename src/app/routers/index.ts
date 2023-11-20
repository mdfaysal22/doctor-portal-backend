/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { specializationRoutes } from '../modules/Specializations/Specializations.routes'
import { doctorRoutes } from '../modules/Doctors/Doctors.routes'
import { appointmentRoutes } from '../modules/Appointments/Appointments.routes'
import { serviceRoutes } from '../modules/Services/Services.routes'
import { adminRoutes } from '../modules/Admins/Admins.routes'
import { patientRoutes } from '../modules/Patients/Patients.routes'
import { availableDoctorRoutes } from '../modules/AvailableDoctor/AvailableDoctor.routers'
import { availableServiceRoutes } from '../modules/AvailableService/AvailableService.routers'
import { paymentRoutes } from '../modules/Payment/Payment.routers'
import { medicalProfileRoutes } from '../modules/MedicalProfile/MedicalProfile.routers'
import { timeSlotRoutes } from '../modules/TimeSlot/TimeSlot.routers'

const router = express.Router()
const moduleRoutes: any[] = [
    {path: '/specialization', route : specializationRoutes},
    {path: '/doctor', route : doctorRoutes},
    {path: '/appointment', route: appointmentRoutes},
    {path: '/service', route: serviceRoutes},
    {path: '/admin', route: adminRoutes},
    {path: '/patient', route: patientRoutes},
    {path: '/availableDoctor', route: availableDoctorRoutes},
    {path: '/availableService', route: availableServiceRoutes},
    {path: '/payment', route: paymentRoutes},
    {path: '/medicalProfile', route: medicalProfileRoutes},
    {path: '/timeSlot', route: timeSlotRoutes}

]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router