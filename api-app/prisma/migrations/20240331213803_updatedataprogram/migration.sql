/*
  Warnings:

  - You are about to drop the column `duration` on the `program` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `program` DROP COLUMN `duration`,
    ADD COLUMN `durationOnline` VARCHAR(191) NULL,
    ADD COLUMN `durationOnsite` VARCHAR(191) NULL;
