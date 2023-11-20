/*
  Warnings:

  - You are about to drop the column `specialization_id` on the `doctors` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "doctors" DROP CONSTRAINT "doctors_specialization_id_fkey";

-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "specialization_id";
