/*
  Warnings:

  - Added the required column `checkpoint` to the `typeContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkpointName` to the `typeContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exercises` to the `typeContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exericesName` to the `typeContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdf` to the `typeContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdfName` to the `typeContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project` to the `typeContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectName` to the `typeContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `video` to the `typeContent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `typecontent` ADD COLUMN `checkpoint` VARCHAR(191) NOT NULL,
    ADD COLUMN `checkpointName` VARCHAR(191) NOT NULL,
    ADD COLUMN `exercises` VARCHAR(191) NOT NULL,
    ADD COLUMN `exericesName` VARCHAR(191) NOT NULL,
    ADD COLUMN `pdf` VARCHAR(191) NOT NULL,
    ADD COLUMN `pdfName` VARCHAR(191) NOT NULL,
    ADD COLUMN `project` VARCHAR(191) NOT NULL,
    ADD COLUMN `projectName` VARCHAR(191) NOT NULL,
    ADD COLUMN `video` VARCHAR(191) NOT NULL;
