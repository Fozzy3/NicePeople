use master
go
IF NOT EXISTS(SELECT name FROM master.dbo.sysdatabases WHERE NAME = 'DBNICEPEOPLE')
CREATE DATABASE DBNICEPEOPLE

GO 

USE DBNICEPEOPLE

GO

if not exists (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'CIUDADES')
create table CIUDADES(
IdCiudad int primary key identity(1,1),
Ciudad varchar(60),
Otro varchar(60)
)

go

select * from dbo.CIUDADES