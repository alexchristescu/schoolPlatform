-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2021 at 11:58 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `platforma_studenti`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `nume` text NOT NULL,
  `prenume` text NOT NULL,
  `email` text NOT NULL,
  `rol` text DEFAULT NULL,
  `rang` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `user_id`, `nume`, `prenume`, `email`, `rol`, `rang`) VALUES
(1, 1, 'Gheorghe', 'Marius', 'g.marius@mail.com', 'Student anul 1', 1),
(2, 3, 'Andreea', 'Ioana', 'a.ioana@mail.com', 'Student anul 3', 1),
(3, 2, 'Ion', 'Alex', 'i.alex@mail.com', 'student anul 2', 1),
(4, 4, 'Lorena', 'Popa', 'l.popa@mail.com', 'Profesor Proiectarea algoritmilor', 2),
(5, 5, 'Maria', 'Ioana', 'm.ioana@mail.com', 'Profesor Proiectare Logica', 2),
(6, 6, 'Razvan', 'Andrei', 'r.andrei@mail.com', 'Profesor Aplicatii Web', 2);

-- --------------------------------------------------------

--
-- Table structure for table `ani`
--

CREATE TABLE `ani` (
  `ID` int(11) NOT NULL,
  `An` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ani`
--

INSERT INTO `ani` (`ID`, `An`) VALUES
(1, 'anul 1'),
(2, 'anul 2'),
(3, 'anul 3');

-- --------------------------------------------------------

--
-- Table structure for table `fisiereproiect`
--

CREATE TABLE `fisiereproiect` (
  `ID` int(11) NOT NULL,
  `DenumireFisier` varchar(60) NOT NULL,
  `Fisier` blob DEFAULT NULL,
  `Comentarii` text NOT NULL,
  `DataAdaugare` datetime NOT NULL,
  `IdProiect` int(11) NOT NULL,
  `IdStud` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fisiereproiect`
--

INSERT INTO `fisiereproiect` (`ID`, `DenumireFisier`, `Fisier`, `Comentarii`, `DataAdaugare`, `IdProiect`, `IdStud`) VALUES
(51, 'Tema-2-linkuri.docx', NULL, 'PL 1', '2021-04-27 14:47:22', 2, 1),
(54, 'Why.Him.2016.BDRip.x264.AC3.RoSubbed-playSD.torrent', NULL, 'PL 2', '2021-04-27 15:43:04', 10, 1),
(55, 'Requirements.docx.docx', NULL, ' PL 1', '2021-04-27 16:04:14', 2, 2),
(56, 'Nikita.S01.HDTV.XviD-FL.torrent', NULL, 'PL 2', '2021-04-27 16:05:23', 10, 2),
(57, 'exlog.xlsx', NULL, 'PL 3', '2021-04-27 16:57:53', 18, 1),
(58, 'roweb-incercare-php.zip', NULL, 'Structuri tema 1', '2021-04-27 17:00:43', 1, 1),
(59, 'Requirements (1).docx', NULL, 'incarcare', '2021-05-10 18:11:57', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `materii`
--

CREATE TABLE `materii` (
  `id` int(11) NOT NULL,
  `IdAn` int(11) NOT NULL,
  `denumire` text NOT NULL,
  `descriere` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `materii`
--

INSERT INTO `materii` (`id`, `IdAn`, `denumire`, `descriere`) VALUES
(1, 1, 'Proiectare Logica', 'O poartă logică este un dispozitiv electronic numeric elementar implementând o funcțiune logică abstractă elementară. Porțile logice sunt structurile de bază care permit realizarea unor funcții logice și matematice mult mai complexe în circuitele integrate digitale.'),
(2, 1, 'Structuri de Date', 'În informatică, o structură de date este o metodă sistematică de stocare a informațiilor și datelor într-un calculator, în așa fel încât ele să poată fi folosite în mod eficient. '),
(3, 1, 'Aplicatii Web', 'O aplicație web este un program care rulează într-o arhitectură client-server folosind tehnologiile deschise World Wide Web. Ele înlocuiesc modelele în care atât serverul cât și clientul rulează tehnologii proprietar, mentenanța aplicațiilor de pe partea de client fiind prea complexă, costisitoare și susceptibilă la erori.'),
(4, 2, 'Sisteme de Operare', 'Un sistem de operare, prescurtat SO (engleză operating system, prescurtat OS), este un ansamblu de programe care are rolul de a gestiona și de a facilita utilizatorului accesul la resursele sistemului de calcul.'),
(5, 2, 'Analiza Matematica', 'Analiza matematică este acea ramură a matematicii care studiază funcțiile, limitele, derivatele și aplicațiile lor (cuvânt derivat din franceză analyse), precum și operatori de funcții, spații și categorii algebrice de spații vectoriale de funcții matematice.'),
(6, 2, 'Inteligenta Artificiala', 'În informatică, inteligența artificială (IA) este inteligența expusă de mașini, spre deosebire de inteligența naturală, expusă de oameni și de unele animale.'),
(7, 3, 'Microprocesoare', 'Un microprocesor este un procesor ale cărui componente au fost suficient de miniaturizate pentru a fi grupate într-un singur circuit integrat.'),
(8, 3, 'Informatica Aplicata', 'Termenul informatică desemnează știința procesării sistematice a informației, în special a procesării cu ajutorul calculatoarelor. Termenul englezesc corespunzător este Computer Science (știința calculatoarelor).'),
(9, 3, 'Limbaje Formale', 'În matematică, logică și informatică, un limbaj formal este o mulțime de cuvinte de lungime finită (șiruri de caractere) bazate pe un alfabet finit, și teoria științifică ce tratează aceste entități se numește teoria limbajelor formale.');

-- --------------------------------------------------------

--
-- Table structure for table `profesor`
--

CREATE TABLE `profesor` (
  `ID` int(11) NOT NULL,
  `Nume` varchar(30) NOT NULL,
  `Prenume` varchar(30) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profesor`
--

INSERT INTO `profesor` (`ID`, `Nume`, `Prenume`, `UserId`, `Email`) VALUES
(1, 'Lorena', 'Popa', 4, 'l.popa@mail.com'),
(2, 'Maria', 'Ioana', 5, 'm.ioana@mail.com'),
(3, 'Razvan', 'Andrei', 6, 'r.andrei@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `profesormaterii`
--

CREATE TABLE `profesormaterii` (
  `ID` int(11) NOT NULL,
  `IdProfesor` int(11) NOT NULL,
  `IdMaterie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profesormaterii`
--

INSERT INTO `profesormaterii` (`ID`, `IdProfesor`, `IdMaterie`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `proiect`
--

CREATE TABLE `proiect` (
  `ID` int(11) NOT NULL,
  `Denumire` varchar(40) NOT NULL,
  `IdMaterie` int(11) NOT NULL,
  `IdProfesor` int(11) NOT NULL,
  `DataAdaugare` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `proiect`
--

INSERT INTO `proiect` (`ID`, `Denumire`, `IdMaterie`, `IdProfesor`, `DataAdaugare`) VALUES
(1, 'Structuri de date tema 1', 2, 2, '0000-00-00 00:00:00'),
(2, 'Proiectare logica tema 1', 1, 1, '0000-00-00 00:00:00'),
(3, 'Aplicatii Web tema 1', 3, 3, '0000-00-00 00:00:00'),
(4, 'Structuri de date tema 2', 2, 2, '0000-00-00 00:00:00'),
(10, 'Proiectare logica tema 2', 1, 1, '2021-04-13 16:38:20'),
(18, 'Proiectare logica tema 3', 1, 1, '2021-04-13 16:51:11'),
(22, 'tema 4', 1, 1, '2021-04-14 13:44:32'),
(39, 'test3', 4, 1, '2021-04-21 16:14:04'),
(42, 'tema 5', 1, 1, '2021-04-23 13:31:54'),
(45, 'tema 6', 1, 1, '2021-04-26 11:11:28'),
(52, 'Proiectare Logica tema 7', 1, 1, '2021-04-27 13:00:27'),
(61, 'tema 8', 1, 1, '2021-05-17 12:08:36');

-- --------------------------------------------------------

--
-- Table structure for table `rang`
--

CREATE TABLE `rang` (
  `ID` int(11) NOT NULL,
  `Nume` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rang`
--

INSERT INTO `rang` (`ID`, `Nume`) VALUES
(1, 'Profesor'),
(2, 'Student');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `ID` int(11) NOT NULL,
  `Nume` varchar(30) NOT NULL,
  `Prenume` varchar(30) NOT NULL,
  `IdAn` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`ID`, `Nume`, `Prenume`, `IdAn`, `UserId`, `Email`) VALUES
(1, 'Gheorghe', 'Marius', 1, 1, 'g.marius@mail.com'),
(2, 'Andreea ', 'Ioana', 1, 3, 'a.ioana@mail.com'),
(3, 'Ion', 'Alex', 2, 2, 'i.alex@mail.com'),
(4, 'Alex', 'Alex', 1, 7, 'a.alex@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `studentiproiect`
--

CREATE TABLE `studentiproiect` (
  `ID` int(11) NOT NULL,
  `IdProiect` int(11) NOT NULL,
  `IdStudent` int(11) NOT NULL,
  `Nota` int(11) DEFAULT NULL,
  `ComentariuProf` text DEFAULT NULL,
  `StareProiect` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentiproiect`
--

INSERT INTO `studentiproiect` (`ID`, `IdProiect`, `IdStudent`, `Nota`, `ComentariuProf`, `StareProiect`) VALUES
(37, 2, 1, 7, 'Se putea si mai bine', 1),
(40, 10, 1, 10, 'Felicitari!', 1),
(41, 2, 2, 9, 'Iti lipseste o acolada la linia 80', 1),
(42, 10, 2, NULL, NULL, 0),
(43, 18, 1, NULL, NULL, 0),
(44, 1, 1, NULL, NULL, 0),
(45, 0, 1, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` text NOT NULL,
  `pass` text NOT NULL,
  `rangid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user`, `pass`, `rangid`) VALUES
(1, 'Gheorghe.Marius', 'asdfgh', 2),
(2, 'Ion.Alex', '1234', 2),
(3, 'Andreea.Ioana', 'asdfghi', 2),
(4, 'Lorena.Popa', '12345', 1),
(5, 'Maria.Ioana', 'asdfgh', 1),
(6, 'Razvan.Andrei', 'asdfgh', 1),
(7, 'Alex.Alex', 'asdfgh', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ani`
--
ALTER TABLE `ani`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `fisiereproiect`
--
ALTER TABLE `fisiereproiect`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `materii`
--
ALTER TABLE `materii`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `profesormaterii`
--
ALTER TABLE `profesormaterii`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `proiect`
--
ALTER TABLE `proiect`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `rang`
--
ALTER TABLE `rang`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `studentiproiect`
--
ALTER TABLE `studentiproiect`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ani`
--
ALTER TABLE `ani`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fisiereproiect`
--
ALTER TABLE `fisiereproiect`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `materii`
--
ALTER TABLE `materii`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `profesor`
--
ALTER TABLE `profesor`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `profesormaterii`
--
ALTER TABLE `profesormaterii`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `proiect`
--
ALTER TABLE `proiect`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `rang`
--
ALTER TABLE `rang`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `studentiproiect`
--
ALTER TABLE `studentiproiect`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
