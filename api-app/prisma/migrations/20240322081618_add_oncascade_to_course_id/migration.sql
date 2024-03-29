-- DropForeignKey
ALTER TABLE `programcourse` DROP FOREIGN KEY `ProgramCourse_courseId_fkey`;

-- AddForeignKey
ALTER TABLE `ProgramCourse` ADD CONSTRAINT `ProgramCourse_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
