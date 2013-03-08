-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Client: 127.0.0.1
-- Généré le: Ven 08 Mars 2013 à 08:38
-- Version du serveur: 5.5.27-log
-- Version de PHP: 5.4.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `mysourceproject`
--

-- --------------------------------------------------------

--
-- Structure de la table `achat`
--

CREATE TABLE IF NOT EXISTS `achat` (
  `ID_Achat` int(11) NOT NULL AUTO_INCREMENT,
  `Date_Achat` date DEFAULT NULL,
  `Note_Achat` int(11) DEFAULT NULL,
  `Commentaire` varchar(300) DEFAULT NULL,
  `ID_Utilisateur` int(11) NOT NULL,
  `ID_Projet` int(11) NOT NULL,
  PRIMARY KEY (`ID_Achat`),
  KEY `FK_Achat_ID_Utilisateur` (`ID_Utilisateur`),
  KEY `FK_Achat_ID_Projet` (`ID_Projet`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `achat`
--

INSERT INTO `achat` (`ID_Achat`, `Date_Achat`, `Note_Achat`, `Commentaire`, `ID_Utilisateur`, `ID_Projet`) VALUES
(2, NULL, NULL, 'Mon commentaire :-)', 1, 11);

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE IF NOT EXISTS `categorie` (
  `ID_Categorie` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`ID_Categorie`),
  UNIQUE KEY `Nom` (`Nom`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `categorie`
--

INSERT INTO `categorie` (`ID_Categorie`, `Nom`) VALUES
(1, 'C++'),
(2, 'PHP'),
(3, 'Test'),
(4, 'Toto');

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE IF NOT EXISTS `projet` (
  `ID_Projet` int(11) NOT NULL AUTO_INCREMENT,
  `Titre_Projet` varchar(100) DEFAULT NULL,
  `Path_Projet` varchar(100) DEFAULT NULL,
  `Prix_projet` double DEFAULT NULL,
  `Path_Code_Demo` varchar(100) DEFAULT NULL,
  `Description_Projet` varchar(300) DEFAULT NULL,
  `ID_Utilisateur` int(11) DEFAULT NULL,
  `ID_Categorie` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_Projet`),
  KEY `FK_Projet_ID_Utilisateur` (`ID_Utilisateur`),
  KEY `FK_Projet_ID_Categorie` (`ID_Categorie`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Contenu de la table `projet`
--

INSERT INTO `projet` (`ID_Projet`, `Titre_Projet`, `Path_Projet`, `Prix_projet`, `Path_Code_Demo`, `Description_Projet`, `ID_Utilisateur`, `ID_Categorie`) VALUES
(11, 'drftgyhujik', 'dfghjkl', 1, 'dfghjkl', 'cfgvbhnjk,l;cfgvbhjnk', 1, 1),
(12, 'drftgyhujik', 'dfghjkl', 1, 'dfghjkl', 'cfgvbhnjk,l;cfgvbhjnk', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `ID_Utilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `Type_Utilisateur` varchar(12) DEFAULT NULL,
  `Nom_Utilisateur` varchar(30) DEFAULT NULL,
  `Prenom_Utilisateur` varchar(30) DEFAULT NULL,
  `Sexe_Utilisateur` varchar(6) DEFAULT NULL,
  `Mail_Utilisateur` varchar(50) DEFAULT NULL,
  `Numero_PayPal` int(11) DEFAULT NULL,
  `Note_Utilisateur` int(11) DEFAULT NULL,
  `mot_de_passe` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`ID_Utilisateur`),
  UNIQUE KEY `Mail_Utilisateur` (`Mail_Utilisateur`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`ID_Utilisateur`, `Type_Utilisateur`, `Nom_Utilisateur`, `Prenom_Utilisateur`, `Sexe_Utilisateur`, `Mail_Utilisateur`, `Numero_PayPal`, `Note_Utilisateur`, `mot_de_passe`) VALUES
(1, 'developpeur', 'Poissonnet', 'Hugo', 'male', 'hugo@majewan.fr', 45678956, NULL, 'test');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `achat`
--
ALTER TABLE `achat`
  ADD CONSTRAINT `FK_Achat_ID_Projet` FOREIGN KEY (`ID_Projet`) REFERENCES `projet` (`ID_Projet`),
  ADD CONSTRAINT `FK_Achat_ID_Utilisateur` FOREIGN KEY (`ID_Utilisateur`) REFERENCES `utilisateur` (`ID_Utilisateur`);

--
-- Contraintes pour la table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `FK_Projet_ID_Categorie` FOREIGN KEY (`ID_Categorie`) REFERENCES `categorie` (`ID_Categorie`),
  ADD CONSTRAINT `FK_Projet_ID_Utilisateur` FOREIGN KEY (`ID_Utilisateur`) REFERENCES `utilisateur` (`ID_Utilisateur`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
