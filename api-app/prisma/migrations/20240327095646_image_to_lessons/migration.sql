/*
  Warnings:

  - Added the required column `imageURL` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lesson` ADD COLUMN `imageURL` LONGTEXT NOT NULL;
