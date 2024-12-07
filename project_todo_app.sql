-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 07, 2024 lúc 06:19 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `project_todo_app`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_group`
--

CREATE TABLE `tbl_group` (
  `groupId` int(11) NOT NULL,
  `group_name` varchar(255) NOT NULL,
  `create_date` date NOT NULL,
  `update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_group_user`
--

CREATE TABLE `tbl_group_user` (
  `group_user_id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `groupId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_todo`
--

CREATE TABLE `tbl_todo` (
  `todoId` int(11) NOT NULL,
  `todo_title` varchar(255) NOT NULL,
  `todo_description` varchar(255) NOT NULL,
  `todo_start_date` date NOT NULL,
  `todo_end_date` date NOT NULL,
  `create_date` date NOT NULL,
  `update_date` date NOT NULL,
  `todo_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_user`
--

CREATE TABLE `tbl_user` (
  `userId` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_phone` int(11) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_birtday` date NOT NULL,
  `create_date` date NOT NULL,
  `update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_user_todo`
--

CREATE TABLE `tbl_user_todo` (
  `user_todo_id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `todoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_group`
--
ALTER TABLE `tbl_group`
  ADD PRIMARY KEY (`groupId`);

--
-- Chỉ mục cho bảng `tbl_group_user`
--
ALTER TABLE `tbl_group_user`
  ADD PRIMARY KEY (`group_user_id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `groupId` (`groupId`);

--
-- Chỉ mục cho bảng `tbl_todo`
--
ALTER TABLE `tbl_todo`
  ADD PRIMARY KEY (`todoId`);

--
-- Chỉ mục cho bảng `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`userId`);

--
-- Chỉ mục cho bảng `tbl_user_todo`
--
ALTER TABLE `tbl_user_todo`
  ADD KEY `userId` (`userId`,`todoId`),
  ADD KEY `todoId` (`todoId`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_group`
--
ALTER TABLE `tbl_group`
  MODIFY `groupId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_group_user`
--
ALTER TABLE `tbl_group_user`
  MODIFY `group_user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_todo`
--
ALTER TABLE `tbl_todo`
  MODIFY `todoId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `tbl_group_user`
--
ALTER TABLE `tbl_group_user`
  ADD CONSTRAINT `tbl_group_user_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `tbl_user` (`userId`),
  ADD CONSTRAINT `tbl_group_user_ibfk_2` FOREIGN KEY (`groupId`) REFERENCES `tbl_group` (`groupId`);

--
-- Các ràng buộc cho bảng `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD CONSTRAINT `tbl_user_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `tbl_user_todo` (`userId`);

--
-- Các ràng buộc cho bảng `tbl_user_todo`
--
ALTER TABLE `tbl_user_todo`
  ADD CONSTRAINT `tbl_user_todo_ibfk_1` FOREIGN KEY (`todoId`) REFERENCES `tbl_todo` (`todoId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
