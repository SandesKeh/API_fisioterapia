import con from "./connection.js";

export async function inserirEndereco(enderecoObjs) {
    let comando = ` insert into tb_endereco (pais, cep, cidade, estado, endereco, numero, bairro, complemento)
            values (?,?,?,?,?,?,?,?)
    `
    
    let resposta = await con.query(comando, [enderecoObjs.pais, enderecoObjs.cep, enderecoObjs.cidade, enderecoObjs.estado, enderecoObjs.endereco, enderecoObjs.numero, enderecoObjs.bairro, enderecoObjs.complemento])

    let into = resposta[0];

    return into.insertId;
}

export async function consultarEndereco() {
    let comando = ` select * from tb_endereco `

    let resposta = await con.query(comando);

    return resposta[0];
}

export async function alterarEndereco(enderecoObjs, id) {
    let comando = `update tb_endereco
                    set pais =?,
                        cep=?,
                        cidade=?,
                        estado=?,
                        endereco=?,
                        numero=?,
                        bairro=?,
                        complemento=?
                    where id_endereco=?
    `
    let resposta = await con.query(comando, [enderecoObjs.pais, enderecoObjs.cep, enderecoObjs.cidade, enderecoObjs.estado, enderecoObjs.endereco, enderecoObjs.numero, enderecoObjs.bairro, enderecoObjs.complemento, id] )

    return resposta[0].affectedRows;
}

export async function deletarEndereco(id) {
    let comando =` delete from tb_endereco
                    where id_endereco = ?
    `
    let resposta = await con.query(comando, id);

    return resposta[0].affectedRows
}