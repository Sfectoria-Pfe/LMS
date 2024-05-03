/*
  Warnings:

  - You are about to drop the column `questionId` on the `programcourse` table. All the data in the column will be lost.
  - Added the required column `questionId` to the `PropositionAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `programcourse` DROP FOREIGN KEY `ProgramCourse_questionId_fkey`;

-- AlterTable
ALTER TABLE `programcourse` DROP COLUMN `questionId`;

-- AlterTable
ALTER TABLE `propositionanswer` ADD COLUMN `questionId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `PropositionAnswer` ADD CONSTRAINT `PropositionAnswer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
