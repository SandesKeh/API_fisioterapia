import con from "./connection.js";

export async function inserirInfPessoais(pessoaisObj){
    let comando = `insert into tb_informacoes_pessoais(nome, grupo, data_nascimento, idade, genero, email, celular, cpf, rg)
       values (?,?,?,?,?,?,?,?,?)
    `;

    let resposta = await con.query (comando, [pessoaisObj.nome, pessoaisObj.grupo, pessoaisObj.nascimento, pessoaisObj.idade, pessoaisObj.genero, pessoaisObj.email, pessoaisObj.celular, pessoaisObj.cpf, pessoaisObj.rg ])

    let into = resposta[0];

    return into.insertId;
}


export async function consultarPessoais() {
    let comando = `
        select*from tb_informacoes_pessoais;
    `
    let registro = await con.query(comando);
    let fim = registro[0];
    return fim;
}

export async function  consultaPorId(id) {
    let comando = `
        select * from tb_informacoes_pessoais where id_informacoes_pessoais = ?
    `;

    let registro = await con.query(comando, [id]);
    let fim = registro[0];
    return fim 
}

export async function deletaPessoas(id) {
    let comando = `
    delete from tb_informacoes_pessoais where id_informacoes_pessoais = ?
    `
    let registro = await con.query(comando, [id]);
    let fim = registro[0];
    return fim.affectedRows;
}

export async function updatePessoas(pessoaisObj, id) {
    let comando = `
        update tb_informacoes_pessoais
        set  nome = ?,
        grupo = ? ,
        data_nascimento = ?,
        idade = ?,
        genero =?,
        email = ?,
        celular = ? ,
        cpf = ?,
        rg =?
        where id_informacoes_pessoais = ?
    `
    let registro = await con.query(comando, [pessoaisObj.nome, pessoaisObj.grupo, pessoaisObj.nascimento, pessoaisObj.idade, pessoaisObj.genero, pessoaisObj.email, pessoaisObj.celular, pessoaisObj.cpf, pessoaisObj.rg, id ])
    let fim = registro[0];
    return fim.affectedRows;

}