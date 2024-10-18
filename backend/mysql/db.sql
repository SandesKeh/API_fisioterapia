create database db_autonomo_api;

use db_autonomo_api;


create table tb_login_autonomo(
id_autonomo int auto_increment primary key,
email varchar(200),
senha varchar(200)
);

insert into tb_login_autonomo( email, senha)
values (?,?);

create table tb_grupo(
id_grupo int auto_increment primary key,
nome varchar(200)
);

create table tb_genero(
id_genero int auto_increment primary key,
nome varchar(200)
);

create table tb_informacoes_pessoais(
id_informacoes_pessoais int auto_increment primary key,
nome varchar(200),
id_grupo int,
data_nascimento varchar(200),
idade varchar(200),
id_genero int,
email varchar(200) unique,
celular varchar(200) unique,
cpf varchar(11) unique,
rg varchar(200) unique,
foreign key (id_grupo) references tb_grupo(id_grupo) on delete cascade on update cascade,
foreign key (id_genero) references tb_genero(id_genero) on delete cascade on update cascade
); 

create table tb_pacotes(
id_pacotes int auto_increment primary key,
nome varchar(200),
valor decimal(10,2)
);

create table tb_informacoes_financeiros(
id_informacoes_financeiro int auto_increment primary key,
id_pacotes int,
valor decimal(10,2),
foreign key (id_pacotes) references tb_pacotes(id_pacotes) on delete cascade on update cascade
);


create table tb_pais(
id_pais int auto_increment primary key,
nome varchar (200)
);


create table tb_endereco(
id_endereco int auto_increment primary key,
id_pais int,
cep varchar(200),
cidade varchar(200),
estado varchar(2),
endereco varchar(200),
numero varchar(200),
bairro varchar(200),
complemento varchar(200),
foreign key (id_pais) references tb_pais(id_pais) on delete cascade on update cascade
);

create table tb_responsavel(
id_responsavel int auto_increment primary key,
nome_responsavel varchar(200),
cpf varchar(11) unique,
telefone varchar(200) unique
);


create table tb_cliente_cadastro_agenda (
id_cliente int primary key auto_increment,
nome VARCHAR(200),
data DATE,
horario TIME,
repetir boolean,
modo VARCHAR(10),
servico VARCHAR (50)
);

create table tb_pessoal_cadastro_agenda (
id_pessoal int primary key auto_increment,
nome VARCHAR(200),
data DATE,
repetir boolean,
horario TIME,
modo VARCHAR(10)
);

create table tb_adicionar_receita(
id_adicionar_receita int auto_increment primary key,
proriedade varchar(200),
categoria_financeira varchar(200),
descricao varchar(200),
valor decimal(10,2),
data_pagamento varchar(200),
forma_pagamento varchar(200),
repetir boolean,
escolha_ocorrencia varchar(200),
observacao varchar(400)
);

create table tb_adicionar_despesa(
propriedade varchar(200),
categoria_financeira varchar(200),
descricao varchar(200),
valor decimal(10,2),
data_pagamento varchar(200),
pago boolean,
dt_pagamento varchar(200),
repetir boolean,
escolher_ocorrencia varchar(200),
observacao varchar(400)
);

create table tb_adicionar_profissional(
id_adicionar_profissional int auto_increment primary key,
nome varchar(200),
email varchar(200),
acesso boolean
);

create table tb_adicionar_documento(
id_adicionar_documento int auto_increment primary key,
tipo varchar(200),
titulo varchar(200),
conteudo varchar(200),
dt_cadastro varchar(200)
);

create table tb_notificacao(
id_notificacao int auto_increment primary key,
lembrete_sessao_email boolean,
msg_aniversario_email boolean,
lembrete_sessao_whatsapp boolean,
msg_aniversario_whatsapp boolean,
lembrete_sessao_sms boolean,
msg_aniversario_sms boolean
);

create table tb_inventario(
id_inventario int auto_increment primary key,
nome_produto varchar(200),
categoria varchar(200),
qts_estoque decimal(10,2),
onde_comprou varchar(200),
preco_unitario decimal(10,2),
valor_total decimal(10,2),
data_compra varchar(200)
);
