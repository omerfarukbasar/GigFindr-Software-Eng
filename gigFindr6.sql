-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: GIGFINDR
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postID` int NOT NULL,
  `userID` int NOT NULL,
  `comment` varchar(225) NOT NULL,
  `commentDate` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_comment1` (`postID`),
  KEY `FK_comment2` (`userID`),
  CONSTRAINT `FK_comment1` FOREIGN KEY (`postID`) REFERENCES `posts` (`id`),
  CONSTRAINT `FK_comment2` FOREIGN KEY (`userID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,2,'great post','2021-11-22');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `followingRelationship`
--

DROP TABLE IF EXISTS `followingRelationship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followingRelationship` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `followerID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fr1` (`userID`),
  KEY `FK_fr2` (`followerID`),
  CONSTRAINT `FK_fr1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_fr2` FOREIGN KEY (`followerID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followingRelationship`
--

LOCK TABLES `followingRelationship` WRITE;
/*!40000 ALTER TABLE `followingRelationship` DISABLE KEYS */;
INSERT INTO `followingRelationship` VALUES (1,1,2),(2,1,3),(3,1,4),(4,2,3),(5,2,4),(6,2,1),(7,3,1),(8,3,2),(9,3,4);
/*!40000 ALTER TABLE `followingRelationship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `musicians`
--

DROP TABLE IF EXISTS `musicians`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `musicians` (
  `id` int NOT NULL AUTO_INCREMENT,
  `age` int NOT NULL,
  `yearOfExperience` int NOT NULL,
  `talentList` varchar(225) NOT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_musicians` (`userID`),
  CONSTRAINT `FK_musicians` FOREIGN KEY (`userID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musicians`
--

LOCK TABLES `musicians` WRITE;
/*!40000 ALTER TABLE `musicians` DISABLE KEYS */;
INSERT INTO `musicians` VALUES (1,22,10,'Drums',2),(2,22,9,'Guitar',3);
/*!40000 ALTER TABLE `musicians` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postFavorites`
--

DROP TABLE IF EXISTS `postFavorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postFavorites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postID` int NOT NULL,
  `userID` int NOT NULL,
  `likeDate` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_favorites1` (`postID`),
  KEY `FK_favorites2` (`userID`),
  CONSTRAINT `FK_favorites1` FOREIGN KEY (`postID`) REFERENCES `posts` (`id`),
  CONSTRAINT `FK_favorites2` FOREIGN KEY (`userID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postFavorites`
--

LOCK TABLES `postFavorites` WRITE;
/*!40000 ALTER TABLE `postFavorites` DISABLE KEYS */;
INSERT INTO `postFavorites` VALUES (1,1,2,'2021-11-22'),(2,1,3,'2021-11-22'),(3,1,4,'2021-11-22');
/*!40000 ALTER TABLE `postFavorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `content` varchar(225) NOT NULL,
  `image` varchar(100) NULL,
  `audio` longblob,
  `postDate` date NOT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_post` (`userID`),
  CONSTRAINT `FK_post` FOREIGN KEY (`userID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'My Profile Picture','this is my profile picture', '/assets/profilePics/icon.jpg',NULL,'2021-11-22',1);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `profilePic` longblob,
  `firstName` varchar(25) NOT NULL,
  `lastName` varchar(25) NOT NULL,
  `type` enum('Musician','Venue') NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(2) NOT NULL,
  `zip` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `unique_user` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'kmcdevitt','password', '/assets/profilePics/icon.jpg','Katie','McDevitt','Venue','2 apple lane','Garden City','NY',11234),(2,'bmont','pass1', null,'Brendan','Mont','Musician','3 apple lane','Garden City','NY',11234),(3,'wtorres','pass2', null,'Will','Torres','Musician','4 apple lane','Garden City ','NY',11234),(4,'Obasar','pass3', null,'Omer','Basar','Venue','5 apple lane','Garden City','NY',11234);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venue`
--

DROP TABLE IF EXISTS `venue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `capacity` int NOT NULL,
  `vibe` varchar(225) NOT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_venue` (`userID`),
  CONSTRAINT `FK_venue` FOREIGN KEY (`userID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venue`
--

LOCK TABLES `venue` WRITE;
/*!40000 ALTER TABLE `venue` DISABLE KEYS */;
INSERT INTO `venue` VALUES (1,60,'Rock',1),(2,100,'Classical',4);
/*!40000 ALTER TABLE `venue` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-22 19:35:30
