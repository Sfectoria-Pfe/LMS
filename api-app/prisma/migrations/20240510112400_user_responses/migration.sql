-- CreateTable
CREATE TABLE `userResponses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `propositionanswerId` INTEGER NOT NULL,
    `questionId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userResponses` ADD CONSTRAINT `userResponses_propositionanswerId_fkey` FOREIGN KEY (`propositionanswerId`) REFERENCES `PropositionAnswer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userResponses` ADD CONSTRAINT `userResponses_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userResponses` ADD CONSTRAINT `userResponses_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
