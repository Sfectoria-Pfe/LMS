/*
  Warnings:

  - You are about to drop the `coursemodule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `module` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `programmodule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `coursemodule` DROP FOREIGN KEY `CourseModule_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `coursemodule` DROP FOREIGN KEY `CourseModule_moduleId_fkey`;

-- DropForeignKey
ALTER TABLE `programmodule` DROP FOREIGN KEY `ProgramModule_moduleId_fkey`;

-- DropForeignKey
ALTER TABLE `programmodule` DROP FOREIGN KEY `ProgramModule_programId_fkey`;

-- DropTable
DROP TABLE `coursemodule`;

-- DropTable
DROP TABLE `module`;

-- DropTable
DROP TABLE `programmodule`;

-- CreateTable
CREATE TABLE `Lesson` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NULL,
    `courseId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
