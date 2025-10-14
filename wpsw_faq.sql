-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 13, 2025 at 06:07 PM
-- Server version: 10.11.14-MariaDB
-- PHP Version: 8.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onfraio_new_website`
--

-- --------------------------------------------------------

--
-- Table structure for table `wpsw_faq`
--

CREATE TABLE `wpsw_faq` (
  `id` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL DEFAULT '',
  `Question` text NOT NULL,
  `Answer` longtext NOT NULL,
  `order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wpsw_faq`
--

INSERT INTO `wpsw_faq` (`id`, `category`, `Question`, `Answer`, `order`) VALUES
('1', 'General Questions', 'What is Onfra?', 'Onfra is cloud software that works at official and residential reception desks to get the visitor details. It has sophisticated features like authenticating visitor via OTP, Face capture, document sign and much more.', NULL),
('2', 'General Questions', 'How Onfra works?', 'Visitor enters and see 3 options in the tablet screen namely. i.e New, Repeat, Invited. For new visitor entry, visitor enter the personal details and whom they wanna meet (notification will be received by the particular host), next the phone number will be verified by the OTP and finally face will be captured. If the company want the visitors to sign some documents they can also make that enabled. For repeat visitors just phone number will be required to reduce re-entering info again.', NULL),
('3', 'General Questions', 'How should I set up an Onfra account?', 'Signup , \r\nVerify Account ,\r\nAdmin details  and\r\nSet up business details And you are ready to go.\r\nJust register your company and create an account name for company and get started by creating a branch, checkpoint and start registering your visitors for free. If you are using tablet for your reception desk / lobby you can download Onfra Pad in iOS / Android store.', 0),
('4', 'General Questions', 'What is Onfra Pad?', 'Onfra Pad is an App that can be downloaded from stores and installed in the Android Tablet or iPad. Before the device need to be configured in your Onfra account. Once your setup is done, your visitors can check in through the tablet and iPad.', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wpsw_faq`
--
ALTER TABLE `wpsw_faq`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
