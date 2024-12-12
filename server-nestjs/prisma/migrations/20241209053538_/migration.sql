-- CreateTable
CREATE TABLE `tbl_user` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_phone` INTEGER NOT NULL,
    `user_address` VARCHAR(191) NOT NULL,
    `user_birthday` DATE NOT NULL,
    `create_date` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_date` DATE NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_group` (
    `groupId` INTEGER NOT NULL AUTO_INCREMENT,
    `group_name` VARCHAR(191) NOT NULL,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`groupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_user_group` (
    `userId` INTEGER NOT NULL,
    `groupId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `groupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_todo` (
    `todoId` INTEGER NOT NULL AUTO_INCREMENT,
    `todo_title` VARCHAR(191) NOT NULL,
    `todo_description` VARCHAR(191) NOT NULL,
    `todo_status` VARCHAR(191) NOT NULL,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`todoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_user_todo` (
    `userId` INTEGER NOT NULL,
    `todoId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `todoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_user_group` ADD CONSTRAINT `tbl_user_group_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_user_group` ADD CONSTRAINT `tbl_user_group_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `tbl_group`(`groupId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_user_todo` ADD CONSTRAINT `tbl_user_todo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_user_todo` ADD CONSTRAINT `tbl_user_todo_todoId_fkey` FOREIGN KEY (`todoId`) REFERENCES `tbl_todo`(`todoId`) ON DELETE RESTRICT ON UPDATE CASCADE;
