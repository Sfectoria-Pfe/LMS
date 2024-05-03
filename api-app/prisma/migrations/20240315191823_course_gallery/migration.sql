/*
  Warnings:

  - Added the required column `src1` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `src2` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `src1` LONGTEXT NOT NULL,
    ADD COLUMN `src2` LONGTEXT NOT NULL;
