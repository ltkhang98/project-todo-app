-- CreateTable
CREATE TABLE `User` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_phone` INTEGER NOT NULL,
    `user_address` VARCHAR(191) NOT NULL,
    `user_birtday` DATETIME(3) NOT NULL,
    `create_date` DATETIME(3) NOT NULL,
    `update_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;