/*
  Warnings:

  - You are about to drop the column `weeksId` on the `session` table. All the data in the column will be lost.
  - Added the required column `sessionId` to the `Weeks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `session` DROP FOREIGN KEY `Session_weeksId_fkey`;

-- AlterTable
ALTER TABLE `session` DROP COLUMN `weeksId`;

-- AlterTable
ALTER TABLE `weeks` ADD COLUMN `sessionId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Weeks` ADD CONSTRAINT `Weeks_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
