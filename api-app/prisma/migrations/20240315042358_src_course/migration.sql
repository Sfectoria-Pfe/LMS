/*
  Warnings:

  - Added the required column `src` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `src` LONGTEXT NOT NULL;
