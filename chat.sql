-- Active: 1708416626951@@127.0.0.1@3306@chat
create database chat CHARACTER set "utf8" collate utf8_hungarian_ci;

drop table user;
create table user (
    userid int not null AUTO_INCREMENT PRIMARY KEY,
    username varchar(50),
    email varchar(100), 
    passwd BLOB not null,
    token BLOB
);

drop table message;
create table messages (
    messageid integer not null AUTO_INCREMENT PRIMARY KEY,
    userid integer not null,
    message text,
    sendtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign  key (userid) REFERENCES user(userid)
)


create Trigger inserUser BEFORE INSERT on `user`
for EACH ROW
Begin
    set NEW.passwd = SHA2(NEW.passwd,256);
end;

delimiter ;

select * from user;



insert into user values (null,'Maci Laci','maci@laci.com', 'asd',null),
                        (null,'Kés Elek','kes@elek.com', 'asd',null),
                        (null,'Tonna Donna','tonna@donna.com', 'asd',null);

drop procedure userLogin;

CREATE PROCEDURE userLogin(in mail varchar(100),pwd VARCHAR(50))
begin
    select userid from user where user.email= email and user.passwd = SHA2(pwd,256);
end;

delimiter ;

drop Procedure updateToken;

CREATE PROCEDURE userUpdateToken(IN id int, token text)
begin
    update user set user.token = token where user.userid = id;
end;

create Procedure getAllUserInfos(IN userid int)
begin
select * from user where user.userid = userid;
end;

DROP procedure getAllUserMessages;
CREATE procedure getAllUserMessages(IN userid int)
begin
    select message, sendtime from messages where messages.userid = userid;
end;
drop procedure getAllMessages;
create procedure  getAllMessages()
begin
    select messages.userid, message, sendtime, user.username 
    from messages left join user on user.userid = messages.userid;

end;

create PROCEDURE saveMessage(in message text, userid int)
begin
    insert into messages (messageid,message,messages.userid) values (null,message,userid);
end;

call saveMessage('blalanbh',1);

call `getAllUserMessages`(1);

call `getAllMessages`;
