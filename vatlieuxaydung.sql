-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 04, 2024 lúc 03:10 PM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `vatlieuxaydung`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`username`, `password`, `role`) VALUES
('123khang', '$2b$10$BhXoWknyCLXil5jLqVH.cuzSMLxQr4fDdvqinUfb/l1XP0hAuaDpe', 'user'),
('khang', '$2b$10$plc2kVBoN8eXuD5fNnAu4OReN8ERwLC22ayxVPaMYPkN1KbRxawxO', 'admin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoso`
--

CREATE TABLE `hoso` (
  `username` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hoso`
--

INSERT INTO `hoso` (`username`, `fullname`, `address`) VALUES
('123khang', 'VO HUYNH MINH KHANG', 'Can Tho');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `maloai` varchar(50) NOT NULL,
  `tenloai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `loaisanpham`
--

INSERT INTO `loaisanpham` (`maloai`, `tenloai`) VALUES
('DD-01', 'Dây'),
('GA-01', 'Gạch'),
('GG-01', 'Gỗ'),
('KL-01', 'Kim loại');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhasanxuat`
--

CREATE TABLE `nhasanxuat` (
  `mansx` varchar(50) NOT NULL,
  `tennsx` varchar(255) NOT NULL,
  `loaisp` varchar(50) NOT NULL,
  `emailnsx` varchar(255) NOT NULL,
  `diachinsx` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nhasanxuat`
--

INSERT INTO `nhasanxuat` (`mansx`, `tennsx`, `loaisp`, `emailnsx`, `diachinsx`) VALUES
('VLC-125', 'CT TNHH SX Vật liệu kim loại', 'Kim loại', 'VLKL@gmail.com', '67 Tôn Đức Thắng, Hoàn Kiếm, Hà Nội'),
('VLD-265', 'CT TNHH SX Vật liệu dây', 'Dây', 'VLD@gmail.com', '169 Trần Hưng Đạo, Ninh Kiều, Cần Thơ'),
('VLG-125', 'CT TNHH SX Vật liệu gạch', 'Gạch', 'VLG@gmail.com', '43 Phan Đình Phùng, Đống Đa, Hà Nội');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `masp` varchar(50) NOT NULL,
  `tensp` varchar(50) NOT NULL,
  `thongtinchitiet` varchar(255) NOT NULL,
  `soluongsp` int(11) NOT NULL,
  `gia` varchar(50) NOT NULL,
  `hinhanh` varchar(255) NOT NULL,
  `maloai` varchar(50) NOT NULL,
  `mansx` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`masp`, `tensp`, `thongtinchitiet`, `soluongsp`, `gia`, `hinhanh`, `maloai`, `mansx`) VALUES
('D-374', 'Dây thừng', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 25, '11000', 'daythung.jpg', 'DD-01', 'VLD-265'),
('G-595', 'Gạch 4 lỗ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 40, '5000', 'gach.jpg', 'GA-01', 'VLG-125'),
('O-215', 'Ống nước', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 10, '82000', 'ong.jpg', 'KL-01', 'VLC-125'),
('S-215', 'Sắt', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 20, '22000', 'sat.jpg', 'KL-01', 'VLC-125');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`);

--
-- Chỉ mục cho bảng `hoso`
--
ALTER TABLE `hoso`
  ADD PRIMARY KEY (`username`);

--
-- Chỉ mục cho bảng `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`maloai`);

--
-- Chỉ mục cho bảng `nhasanxuat`
--
ALTER TABLE `nhasanxuat`
  ADD PRIMARY KEY (`mansx`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`masp`),
  ADD KEY `maloai` (`maloai`),
  ADD KEY `manxs` (`mansx`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `hoso`
--
ALTER TABLE `hoso`
  ADD CONSTRAINT `hoso_ibfk_1` FOREIGN KEY (`username`) REFERENCES `admin` (`username`);

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`maloai`) REFERENCES `loaisanpham` (`maloai`),
  ADD CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`mansx`) REFERENCES `nhasanxuat` (`mansx`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
