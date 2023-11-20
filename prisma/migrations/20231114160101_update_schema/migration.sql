/*
  Warnings:

  - Added the required column `fees` to the `availableServices` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `available_seats` on the `availableServices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `amount` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "availableServices" ADD COLUMN     "fees" TEXT NOT NULL,
DROP COLUMN "available_seats",
ADD COLUMN     "available_seats" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "amount" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "timeSlots" ALTER COLUMN "start_time" SET DATA TYPE TEXT;
