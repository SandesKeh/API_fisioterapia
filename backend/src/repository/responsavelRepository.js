import con from "./connection.js";

export async function inserirResponsavel(responsavelObj) {
    let comando = ` insert into tb_responsavel (nome_responsavel, cpf, telefone)
                values (?,?,?)
    `
    let resposta = await con.query(comando, [responsavelObj.nome, responsavelObj.cpf, responsavelObj. telefone])

    return resposta[0].insertId
}

export async function consultarResponsavel() {
    let comando= ` select * from tb_responsavel`

    let resposta = await con.query(comando);

    return resposta[0]
}

export async function alterarResponsavel(responsavelObj, id) {
    let comando = ` update tb_responsavel
                        set nome_responsavel=?,
                            cpf=?,
                            telefone=?
                        where id_responsavel=?
    `

    let resposta = await con.query(comando, [responsavelObj.nome, responsavelObj.cpf, responsavelObj.telefone, id]);

    return resposta[0].affectedRows
}

export async function deletarResponsavel(id) {
    let comando = ` delete from tb_responsavel
                    where id_responsavel = ?
    `
    let resposta = await con.query(comando, [id]);

    return resposta[0].affectedRows
}