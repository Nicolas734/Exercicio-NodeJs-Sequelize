create database exercicio;
use exercicio;

create table anotacoes(
id int auto_increment primary key,
nome varchar(150),
idade varchar(150),
email varchar(150),
createdAt date NOT NULL default (current_date()),
updatedAt date
)