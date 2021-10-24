
CREATE DATABASE `pedoappdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

use pedoappdb;

CREATE TABLE IF NOT EXISTS `User` (
  `IdUser` INT NOT NULL,
  `UserName` NVARCHAR(50) NOT NULL,
  `DisplayName` NVARCHAR(100) NULL,
  `Email` NVARCHAR(150) NOT NULL,
  `Telephone` NVARCHAR(9) NOT NULL,
  `Location` VARCHAR(150) NULL,
  `Password` VARCHAR(100) NULL,
  PRIMARY KEY (`IdUser`),
  UNIQUE INDEX `IdUser_UNIQUE` (`IdUser` ASC) VISIBLE,
  UNIQUE INDEX `UserName_UNIQUE` (`UserName` ASC) VISIBLE,
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  UNIQUE INDEX `Telephone_UNIQUE` (`Telephone` ASC) VISIBLE)
ENGINE = InnoDB;

INSERT INTO `pedoappdb`.`user` (`IdUser`, `UserName`, `DisplayName`, `Email`, `Telephone`, `Location`) VALUES ('1', 'miguel', 'miguel', 'miguel', '123412341', 'asdf');