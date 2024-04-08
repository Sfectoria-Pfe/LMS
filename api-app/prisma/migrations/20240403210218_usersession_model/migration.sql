-- CreateTable
CREATE TABLE `SessionUser` (
    `userId` INTEGER NOT NULL,
    `sessionId` INTEGER NOT NULL,

    UNIQUE INDEX `SessionUser_userId_sessionId_key`(`userId`, `sessionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SessionUser` ADD CONSTRAINT `SessionUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionUser` ADD CONSTRAINT `SessionUser_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
