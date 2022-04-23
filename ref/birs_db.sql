-- create database birs;

USE birs;

CREATE TABLE IF NOT EXISTS users (
uuid varchar(64),
fname varchar(128),
profilepic varchar(128),
phone varchar(16),
email varchar(128),
dob date,
quota int,
primary key(uuid)
);

CREATE TABLE IF NOT EXISTS addresses (
id varchar(64),
loc_name varchar(64),
street varchar(128),
city varchar(64),
zip varchar(16),
primary key(id)
);

CREATE TABLE IF NOT EXISTS vehicles (
plate varchar(16),
owner varchar(64), -- Reference UUID
primary key(plate, owner),
foreign key(owner) references users(uuid)
);

CREATE TABLE IF NOT EXISTS rides (
tid varchar(64),
driver varchar(64), -- Reference UUID 
creator varchar(64), -- Reference UUID
r_status SMALLINT,
passengers_max int,
depart_date datetime,
dep_id varchar(64), -- Depart address id 
dest_id varchar(64), -- Destination address id 
vehicle_plate varchar(16),
vehicle_owner varchar(64),  -- Reference UUID 
primary key(tid),
foreign key(driver) references users(uuid),
foreign key(creator) references users(uuid),
foreign key(vehicle_plate, vehicle_owner) references vehicles(plate, owner),
foreign key (dep_id) references addresses(id),
foreign key (dest_id) references addresses(id)
);

CREATE TABLE IF NOT EXISTS passenger_in (
uuid varchar(64),
tid varchar(64),
p_type SMALLINT,
primary key(uuid, tid),
foreign key(uuid) references users(uuid),
foreign key(tid) references rides(tid)
);

CREATE TABLE IF NOT EXISTS comments (
cid INT8,
tid varchar(64),
uuid varchar(64),
content varchar(512),
primary key(cid, tid, uuid),
foreign key(uuid) references users(uuid),
foreign key(tid) references rides(tid)
);