/*
  Warnings:

  - Added the required column `adress` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `about` LONGTEXT NULL,
    ADD COLUMN `adress` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageURL` LONGTEXT NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` DOUBLE NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;
