-- CreateTable
CREATE TABLE `tbl_group` (
    `groupId` INTEGER NOT NULL AUTO_INCREMENT,
    `groupName` VARCHAR(191) NOT NULL,
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

-- AddForeignKey
ALTER TABLE `tbl_user_group` ADD CONSTRAINT `tbl_user_group_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_user_group` ADD CONSTRAINT `tbl_user_group_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `tbl_group`(`groupId`) ON DELETE RESTRICT ON UPDATE CASCADE;
