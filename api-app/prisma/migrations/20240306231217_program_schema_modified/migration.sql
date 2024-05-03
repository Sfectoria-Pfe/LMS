/*
  Warnings:

  - Added the required column `imageURL` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `program` ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `imageURL` LONGTEXT NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
