CREATE DATABASE  IF NOT EXISTS `db_ljbrex` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `db_ljbrex`;
-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: db_ljbrex
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `prodstbs`
--

DROP TABLE IF EXISTS `prodstbs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodstbs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomep` varchar(255) NOT NULL,
  `priceu` float(6,2) NOT NULL,
  `img` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodstbs`
--

LOCK TABLES `prodstbs` WRITE;
/*!40000 ALTER TABLE `prodstbs` DISABLE KEYS */;
INSERT INTO `prodstbs` VALUES (1,'Placa mãe B450M',600.00,'prod1.jpg','2023-02-11 22:00:00','2023-02-11 22:00:00'),(2,'Processador Ryzen 5',650.59,'prod2.jpg','2023-02-11 22:00:00','2023-02-11 22:00:00'),(3,'Memoria ram 4GB',150.29,'prod3.jpg','2023-02-11 22:00:00','2023-02-11 22:00:00'),(4,'Fonte ATX 500w',350.00,'prod4.jpg','2023-02-11 22:00:00','2023-02-11 22:00:00'),(5,'Memoria ram 8GB',275.00,'prod5.jpg','2023-02-11 22:00:00','2023-02-11 22:00:00'),(6,'Placa de Vídeo RTX 3060',2400.00,'prod6.jpg','2023-02-11 22:00:00','2023-02-11 22:00:00'),(7,'Processador Ryzen 7',1400.00,'prod7.jpg','2023-02-11 22:00:00','2023-02-11 22:00:00'),(8,'Placa de Vídeo GTX 1660 TI',1500.00,'prod8.jpg','2023-02-11 22:00:00','2023-02-11 22:00:00'),(9,'Gabinete T-dagger P03W',300.39,'prod9.jpg','2023-02-11 22:00:00','2023-02-11 22:00:00');
/*!40000 ALTER TABLE `prodstbs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_ljbrex'
--

--
-- Dumping routines for database 'db_ljbrex'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-13  0:50:40
