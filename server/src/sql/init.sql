USE iamuber;

CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `username` varchar(255),
  `email` varchar(255),
  `created_at` timestamp,
  `points` integer
);

CREATE TABLE `routes` (
  `id` integer PRIMARY KEY,
  `departure` integer,
  `destination` integer,
  `stations` integer,
  `driver_id` integer,
  `departure_time` datetime,
  `expected_arrival_time` datetime
);

CREATE TABLE `route_stations` (
  `id` integer PRIMARY KEY,
  `route_id` integer,
  `stations_id` integer
);

CREATE TABLE `stations` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `location` point
);

CREATE TABLE `request` (
  `id` integer PRIMARY KEY,
  `route_id` integer,
  `from_station` integer,
  `to_station` integer,
  `passenger_id` integer,
  `created_at` integer,
  `status` ENUM ('processing', 'accepted', 'rejected', 'ongoing', 'done')
);

CREATE TABLE `vehicles` (
  `id` integer PRIMARY KEY,
  `driver_id` integer,
  `license` varchar(255)
);

CREATE TABLE `commentaries` (
  `id` integer PRIMARY KEY,
  `from_userid` integer,
  `to_userid` integer,
  `rating` integer,
  `comment` varchar(1023)
);
