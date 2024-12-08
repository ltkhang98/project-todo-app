-- AlterTable
ALTER TABLE `tbl_user` MODIFY `user_birtday` DATE NOT NULL,
    MODIFY `create_date` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `update_date` DATE NOT NULL;
