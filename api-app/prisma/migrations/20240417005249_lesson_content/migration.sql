/*
  Warnings:

  - You are about to drop the column `typeContentId` on the `lessoncontent` table. All the data in the column will be lost.
  - You are about to drop the `typecontent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `content` to the `LessonContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentname` to the `LessonContent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `lessoncontent` DROP FOREIGN KEY `LessonContent_typeContentId_fkey`;

-- AlterTable
ALTER TABLE `lessoncontent` DROP COLUMN `typeContentId`,
    ADD COLUMN `content` ENUM('video', 'pdf', 'projet', 'checkpoint', 'exercice') NOT NULL,
    ADD COLUMN `contentname` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `typecontent`;
