CREATE SCHEMA IF NOT EXISTS `filmList`;
USE `filmList` ;

CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `genre` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `director` text NOT NULL,
  `language` varchar(255) NOT NULL,
  `length` int(11) NOT NULL,
  `rate` text NOT NULL,
  PRIMARY KEY (`id`)
);  




CREATE TABLE IF NOT EXISTS `users` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `users_email_uindex` (`email`)
);





INSERT INTO `movies` (`id`, `title`, `image`,`description`, `genre`, `year`, `director`, `language`, `length`, `rate`) VALUES
(1, 'The Godfather',"https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg", 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'Crime', 1972, 'Francis Ford Coppola', 'English', 175, '9,2'),
(2, 'Pirates of the Caribbean: The Curse of the Black Pearl',"https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg", 'Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love, the governor''s daughter, from Jack''s former pirate allies, who are now undead.', 'Adventure', 2003, 'Gore Verbinski', 'English', 143, '8,0'),
(3, 'Inception',"https://occ-0-33-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRO7wCHTwNucNkQ1jGsVVQj7mn5HFo28f1JnePEK37bAlWVFUI1hnay7nrEU2TFzBMWAhtjmsltPsos-Z_hxhy9SMU8UQDNiQjws.jpg?r=9d5", 'A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.', 'Action', 2010, 'Christopher Nolan', 'English', 148, '8,8'),
(4, 'Casino',"https://upload.wikimedia.org/wikipedia/en/d/d8/Casino_poster.jpg", 'A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive, compete against each other over a gambling empire, and over a fast living and fast loving socialite.', 'Crime', 1995, 'Martin Scorsese ', 'English', 178, '8,2'),
(5, 'Titanic',"https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png", 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'Drama', 1997, 'James Cameron', 'English', 194, '7,8');



