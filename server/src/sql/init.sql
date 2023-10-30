USE iamuber;

CREATE TABLE `user` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `email` varchar(255) UNIQUE,
  `created_at` timestamp DEFAULT (now()),
  `points` integer DEFAULT 0
);

CREATE TABLE `route` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `departure` integer,
  `destination` integer,
  `stations` integer,
  `driver_id` integer,
  `departure_time` datetime,
  `expected_arrival_time` datetime
);

CREATE TABLE `route_station` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `route_id` integer,
  `stations_id` integer
);

CREATE TABLE `station` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `location` point
);

CREATE TABLE `request` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `route_id` integer,
  `from_station` integer,
  `to_station` integer,
  `passenger_id` integer,
  `created_at` integer,
  `status` ENUM ('processing', 'accepted', 'rejected', 'ongoing', 'done')
);

CREATE TABLE `vehicle` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `driver_id` integer,
  `license` varchar(255)
);

CREATE TABLE `commentary` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `from_userid` integer,
  `to_userid` integer,
  `rating` integer,
  `comment` varchar(255)
);
