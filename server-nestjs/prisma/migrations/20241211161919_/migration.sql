/*
  Warnings:

  - Added the required column `userId` to the `tbl_group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_group` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `tbl_group` ADD CONSTRAINT `tbl_group_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
