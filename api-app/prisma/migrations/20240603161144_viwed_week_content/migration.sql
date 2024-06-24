/*
  Warnings:

  - You are about to drop the column `viewed` on the `lessoncontent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `lessoncontent` DROP COLUMN `viewed`;

-- AlterTable
ALTER TABLE `weekcontent` ADD COLUMN `viewed` BOOLEAN NULL DEFAULT false;
