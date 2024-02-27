-- Active: 1708416626951@@127.0.0.1@3306@chat
create table user (
    userid int AUTO_INCREMENT PRIMARY KEY,
    username varchar(50),
    email varchar(100), 
    passwd BLOB
);

select * from user;

insert into user values (null,'Maci Laci','maci@laci.com', SHA2('asd',256));