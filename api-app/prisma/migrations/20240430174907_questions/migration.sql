/*
  Warnings:

  - You are about to drop the column `content` on the `lessoncontent` table. All the data in the column will be lost.
  - Added the required column `contentExercice` to the `LessonContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentURL` to the `LessonContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `LessonContent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lessoncontent` DROP COLUMN `content`,
    ADD COLUMN `contentExercice` JSON NOT NULL,
    ADD COLUMN `contentURL` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` ENUM('video', 'pdf', 'projet', 'checkpoint', 'exercice') NOT NULL;

-- AlterTable
ALTER TABLE `programcourse` ADD COLUMN `questionId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `scale` INTEGER NOT NULL,
    `lessonContentId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PropositionAnswer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `isCorrect` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProgramCourse` ADD CONSTRAINT `ProgramCourse_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_lessonContentId_fkey` FOREIGN KEY (`lessonContentId`) REFERENCES `LessonContent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
