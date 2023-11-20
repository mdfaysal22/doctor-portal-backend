/*
  Warnings:

  - A unique constraint covering the columns `[doctor_id,time_slot_id,available_date]` on the table `availableDoctors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[time_slot_id,available_doctor_id,slot_date,service_id]` on the table `availableServices` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `available_date` to the `availableDoctors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "availableDoctors" ADD COLUMN     "available_date" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "availableDoctors_doctor_id_time_slot_id_available_date_key" ON "availableDoctors"("doctor_id", "time_slot_id", "available_date");

-- CreateIndex
CREATE UNIQUE INDEX "availableServices_time_slot_id_available_doctor_id_slot_dat_key" ON "availableServices"("time_slot_id", "available_doctor_id", "slot_date", "service_id");
