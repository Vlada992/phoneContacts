-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2018 at 01:01 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookphone`
--

-- --------------------------------------------------------

--
-- Table structure for table `phonedetails`
--

CREATE TABLE `phonedetails` (
  `Id` int(20) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `telephone_number` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `phonedetails`
--

INSERT INTO `phonedetails` (`Id`, `first_name`, `last_name`, `telephone_number`) VALUES
(0, 'Vladan', 'Petrovic', '0637312033'),
(0, 'Vladan', 'Petrovic', '063 7 312 033'),
(0, 'Hub', 'River', '000 000 000'),
(0, 'Pera', 'Peric', '111 245 453'),
(0, 'JakoDugoImeMoje', 'PrezimeTakodje', '011 222 345 430'),
(0, 'Aleksandar', 'Vucic', ' 666 666 666');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
