/*
  Warnings:

  - You are about to drop the column `sessionId` on the `weeks` table. All the data in the column will be lost.
  - Added the required column `weeksId` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `weeks` DROP FOREIGN KEY `Weeks_sessionId_fkey`;

-- AlterTable
ALTER TABLE `session` ADD COLUMN `weeksId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `weeks` DROP COLUMN `sessionId`;

-- CreateTable
CREATE TABLE `WeekContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `weeksId` INTEGER NOT NULL,
    `LessonContentId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_weeksId_fkey` FOREIGN KEY (`weeksId`) REFERENCES `Weeks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeekContent` ADD CONSTRAINT `WeekContent_weeksId_fkey` FOREIGN KEY (`weeksId`) REFERENCES `Weeks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeekContent` ADD CONSTRAINT `WeekContent_LessonContentId_fkey` FOREIGN KEY (`LessonContentId`) REFERENCES `LessonContent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
