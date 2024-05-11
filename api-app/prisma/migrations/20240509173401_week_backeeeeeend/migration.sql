/*
  Warnings:

  - You are about to drop the column `weeksId` on the `weekcontent` table. All the data in the column will be lost.
  - You are about to drop the `weeks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `weekId` to the `WeekContent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `weekcontent` DROP FOREIGN KEY `WeekContent_weeksId_fkey`;

-- DropForeignKey
ALTER TABLE `weeks` DROP FOREIGN KEY `Weeks_sessionId_fkey`;

-- AlterTable
ALTER TABLE `weekcontent` DROP COLUMN `weeksId`,
    ADD COLUMN `weekId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `weeks`;

-- CreateTable
CREATE TABLE `Week` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `sessionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Week` ADD CONSTRAINT `Week_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeekContent` ADD CONSTRAINT `WeekContent_weekId_fkey` FOREIGN KEY (`weekId`) REFERENCES `Week`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
