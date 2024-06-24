/*
  Warnings:

  - A unique constraint covering the columns `[questionId,userId]` on the table `userResponses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `userResponses_questionId_userId_key` ON `userResponses`(`questionId`, `userId`);
