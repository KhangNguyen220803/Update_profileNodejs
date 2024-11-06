-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2024 at 07:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vatlieuxaydung`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`, `role`) VALUES
('123khang', '$2b$10$BhXoWknyCLXil5jLqVH.cuzSMLxQr4fDdvqinUfb/l1XP0hAuaDpe', 'user'),
('khang', '$2b$10$plc2kVBoN8eXuD5fNnAu4OReN8ERwLC22ayxVPaMYPkN1KbRxawxO', 'admin'),
('khanh21', '$2b$10$QGWUjlN3ADQDfY/16SZ2ceEu0TLtS4Sy3Alkd9K7NXwFM77kRcliW', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `chitietdathang`
--

CREATE TABLE `chitietdathang` (
  `madh` varchar(50) NOT NULL,
  `masp` varchar(50) NOT NULL,
  `gia` int(11) NOT NULL,
  `soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chitietdathang`
--

INSERT INTO `chitietdathang` (`madh`, `masp`, `gia`, `soluong`) VALUES
('OD17308806567891', 'D-374', 11000, 13),
('OD17308806567891', 'G-595', 5000, 4),
('OD17308806567891', 'O-215', 82000, 2),
('OD17308806567891', 'S-215', 22000, 1),
('OD17308816647665', 'D-374', 11000, 2),
('OD17308816647665', 'G-595', 5000, 1),
('OD17308816647665', 'O-215', 82000, 14),
('OD17308816647665', 'S-215', 22000, 1),
('OD17309152357884', 'G-595', 5000, 10),
('OD17309152357884', 'O-215', 82000, 8);

-- --------------------------------------------------------

--
-- Table structure for table `donhang`
--

CREATE TABLE `donhang` (
  `madh` varchar(50) NOT NULL,
  `username` varchar(255) NOT NULL,
  `ngaydat` datetime NOT NULL,
  `trangthai` varchar(50) NOT NULL,
  `tonggia` int(11) NOT NULL,
  `diachinhanhang` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donhang`
--

INSERT INTO `donhang` (`madh`, `username`, `ngaydat`, `trangthai`, `tonggia`, `diachinhanhang`) VALUES
('OD17308806567891', '123khang', '2024-11-06 15:10:00', 'Đang giao', 349000, 'Can Tho'),
('OD17308816647665', 'khanh21', '2024-11-06 15:27:00', 'Chờ xác nhận', 1197000, 'Kien Giang'),
('OD17309152357884', '123khang', '2024-11-07 00:47:00', 'Chờ xác nhận', 706000, 'An Giang');

-- --------------------------------------------------------

--
-- Table structure for table `hoso`
--

CREATE TABLE `hoso` (
  `username` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hoso`
--

INSERT INTO `hoso` (`username`, `fullname`, `address`) VALUES
('123khang', 'VO HUYNH MINH KHANG', 'Can Tho'),
('khang', 'a', 'a'),
('khanh21', 'Khanh nguyen', 'kien giang');

-- --------------------------------------------------------

--
-- Table structure for table `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `maloai` varchar(50) NOT NULL,
  `tenloai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `loaisanpham`
--

INSERT INTO `loaisanpham` (`maloai`, `tenloai`) VALUES
('DD-01', 'Dây'),
('GA-01', 'Gạch'),
('GG-01', 'Gỗ'),
('KL-01', 'Kim loại');

-- --------------------------------------------------------

--
-- Table structure for table `nhasanxuat`
--

CREATE TABLE `nhasanxuat` (
  `mansx` varchar(50) NOT NULL,
  `tennsx` varchar(255) NOT NULL,
  `loaisp` varchar(50) NOT NULL,
  `emailnsx` varchar(255) NOT NULL,
  `diachinsx` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nhasanxuat`
--

INSERT INTO `nhasanxuat` (`mansx`, `tennsx`, `loaisp`, `emailnsx`, `diachinsx`) VALUES
('VLC-125', 'CT TNHH SX Vật liệu kim loại', 'Kim loại', 'VLKL@gmail.com', '67 Tôn Đức Thắng, Hoàn Kiếm, Hà Nội'),
('VLD-265', 'CT TNHH SX Vật liệu dây', 'Dây', 'VLD@gmail.com', '169 Trần Hưng Đạo, Ninh Kiều, Cần Thơ'),
('VLG-125', 'CT TNHH SX Vật liệu gạch', 'Gạch', 'VLG@gmail.com', '43 Phan Đình Phùng, Đống Đa, Hà Nội');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `masp` varchar(50) NOT NULL,
  `tensp` varchar(50) NOT NULL,
  `thongtinchitiet` varchar(255) NOT NULL,
  `soluongsp` int(11) NOT NULL,
  `giasp` int(11) NOT NULL,
  `hinhanh` varchar(255) NOT NULL,
  `maloai` varchar(50) NOT NULL,
  `mansx` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`masp`, `tensp`, `thongtinchitiet`, `soluongsp`, `giasp`, `hinhanh`, `maloai`, `mansx`) VALUES
('D-374', 'Dây thừng', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 25, 17000, 'daythung.jpg', 'DD-01', 'VLD-265'),
('G-595', 'Gạch 4 lỗ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 40, 5000, 'gach.jpg', 'GA-01', 'VLG-125'),
('O-215', 'Ống nước', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 10, 82000, 'ong.jpg', 'KL-01', 'VLC-125'),
('S-215', 'Sắt', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 20, 22000, 'sat.jpg', 'KL-01', 'VLC-125');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `chitietdathang`
--
ALTER TABLE `chitietdathang`
  ADD PRIMARY KEY (`madh`,`masp`),
  ADD KEY `madh` (`madh`),
  ADD KEY `masp` (`masp`) USING BTREE;

--
-- Indexes for table `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`madh`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `hoso`
--
ALTER TABLE `hoso`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`maloai`);

--
-- Indexes for table `nhasanxuat`
--
ALTER TABLE `nhasanxuat`
  ADD PRIMARY KEY (`mansx`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`masp`),
  ADD KEY `maloai` (`maloai`),
  ADD KEY `manxs` (`mansx`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chitietdathang`
--
ALTER TABLE `chitietdathang`
  ADD CONSTRAINT `chitietdathang_ibfk_1` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`),
  ADD CONSTRAINT `chitietdathang_ibfk_2` FOREIGN KEY (`madh`) REFERENCES `donhang` (`madh`);

--
-- Constraints for table `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`username`) REFERENCES `admin` (`username`);

--
-- Constraints for table `hoso`
--
ALTER TABLE `hoso`
  ADD CONSTRAINT `hoso_ibfk_1` FOREIGN KEY (`username`) REFERENCES `admin` (`username`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`maloai`) REFERENCES `loaisanpham` (`maloai`),
  ADD CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`mansx`) REFERENCES `nhasanxuat` (`mansx`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
