go
use DBNICEPEOPLE
go
--************************ VALIDAMOS SI EXISTE EL PROCEDIMIENTO ************************--

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_listar')
DROP PROCEDURE usp_obtener

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_registrar')
DROP PROCEDURE usp_registrar

go

--************************ PROCEDIMIENTOS PARA LISTAR DATOS ************************--

create procedure usp_listar
as
begin

select * from CIUDADES
end


go

--************************ PROCEDIMIENTOS PARA CREAR ************************--
create procedure usp_registrar(
@Ciudad varchar(60),
@Otro varchar(60)
)
as
begin

insert into CIUDADES(Ciudad,Otro)
values
(
@Ciudad,
@Otro
)
end
go