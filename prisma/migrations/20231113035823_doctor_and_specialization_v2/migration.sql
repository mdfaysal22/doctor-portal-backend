/*
  Warnings:

  - You are about to drop the column `descripition` on the `specializations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "specializations" DROP COLUMN "descripition",
ADD COLUMN     "description" TEXT;
