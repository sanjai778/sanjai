-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 14, 2025 at 11:16 AM
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
-- Table structure for table `wpsw_testimonials`
--

CREATE TABLE `wpsw_testimonials` (
  `Id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `img` varchar(500) DEFAULT '',
  `category` varchar(255) DEFAULT '',
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `wpsw_testimonials`
--

INSERT INTO `wpsw_testimonials` (`Id`, `name`, `position`, `content`, `img`, `category`, `created_at`, `updated_at`, `Title`) VALUES
(1, 'Mani Bharathi', 'Engineer', 'Onfra revolutionized our workforce and visitor management. Its seamless registration, resource efficiency, and scalability boost productivity. Customization features could enhance its adaptability further.', 'https://onfra.io/wp-content/uploads/2025/08/v3_0048938.webp', 'Technology', '2025-08-01 14:39:43', '2025-10-08 14:57:08', ''),
(2, 'Thameem Ansari', 'Manager', 'Onfra streamlines security management with robust tracking and access control. Real-time monitoring enhances safety protocols. AI integration for predictive insights could further preempt security threats and optimize operations.', 'https://onfra.io/wp-content/uploads/2025/08/Thameem-Ansari-1.webp', 'Security', '2025-08-01 14:39:43', '2025-10-08 14:57:08', ''),
(3, 'Skandha', 'Owner', 'Onfra enhances efficiency with its user-friendly interface and streamlined processes. Detailed reports offer valuable insights. Customizable options in reporting could deepen analytical capabilities, aiding strategic planning.', 'https://onfra.io/wp-content/uploads/2024/05/Skandha.webp', 'Business', '2025-08-01 14:39:43', '2025-10-08 14:57:08', ''),
(4, 'Imran Khan', 'Program Manager', 'Reliable, scalable solution. Manages multiple locations, flexible roles. Adaptable, consistent performance. Integration with HR, emergency response tools enhances functionality for a responsive workplace.', 'https://onfra.io/wp-content/uploads/2025/08/Imran-Khan-1.webp', 'Management', '2025-08-01 14:39:43', '2025-10-08 14:57:08', ''),
(5, 'Dr. Amir Khan', 'Operations Director', 'Onfra vital for healthcare facility operations. Enhances visitor management, patient privacy. Compliant with health regulations, discreet with sensitive information. Health-specific compliance tools and medical record system integration would enhance functionality.', 'https://onfra.io/wp-content/uploads/2024/05/Dr.-Amir-Khan.webp', 'Healthcare', '2025-08-01 14:39:43', '2025-10-08 14:57:08', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wpsw_testimonials`
--
ALTER TABLE `wpsw_testimonials`
  ADD PRIMARY KEY (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
