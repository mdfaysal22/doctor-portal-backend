/*
  Warnings:

  - You are about to drop the column `slot_id` on the `availableDoctors` table. All the data in the column will be lost.
  - You are about to drop the column `slot_id` on the `availableServices` table. All the data in the column will be lost.
  - Added the required column `time_slot_id` to the `availableDoctors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_slot_id` to the `availableServices` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "availableDoctors" DROP CONSTRAINT "availableDoctors_slot_id_fkey";

-- DropForeignKey
ALTER TABLE "availableServices" DROP CONSTRAINT "availableServices_slot_id_fkey";

-- AlterTable
ALTER TABLE "availableDoctors" DROP COLUMN "slot_id",
ADD COLUMN     "time_slot_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "availableServices" DROP COLUMN "slot_id",
ADD COLUMN     "time_slot_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "availableServices" ADD CONSTRAINT "availableServices_time_slot_id_fkey" FOREIGN KEY ("time_slot_id") REFERENCES "timeSlots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "availableDoctors" ADD CONSTRAINT "availableDoctors_time_slot_id_fkey" FOREIGN KEY ("time_slot_id") REFERENCES "timeSlots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
