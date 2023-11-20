/*
  Warnings:

  - A unique constraint covering the columns `[patient_id,available_service_id,appointment_date]` on the table `appointments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "appointments_patient_id_available_service_id_appointment_da_key" ON "appointments"("patient_id", "available_service_id", "appointment_date");
