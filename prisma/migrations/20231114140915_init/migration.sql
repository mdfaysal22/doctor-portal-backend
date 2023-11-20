/*
  Warnings:

  - A unique constraint covering the columns `[patient_id]` on the table `medicalProfiles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[appointment_id]` on the table `payments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "medicalProfiles_patient_id_key" ON "medicalProfiles"("patient_id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_appointment_id_key" ON "payments"("appointment_id");
