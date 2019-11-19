CREATE DATABASE `lean_canvas_rts` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `canvas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

CREATE TABLE `topics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `canvas_id` int(11) NOT NULL,
  `content` varchar(200) NOT NULL,
  `section` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_canvas` (`canvas_id`),
  CONSTRAINT `fk_canvas` FOREIGN KEY (`canvas_id`) REFERENCES `canvas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=latin1;

CREATE TABLE `topics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `canvas_id` int(11) NOT NULL,
  `content` varchar(200) NOT NULL,
  `section` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_canvas` (`canvas_id`),
  CONSTRAINT `fk_canvas` FOREIGN KEY (`canvas_id`) REFERENCES `canvas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=latin1;
