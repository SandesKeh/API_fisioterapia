import con from './connection.js'



export async function inserirDocumentacao(documentacao) {
    const comando = `
        insert into db_autonomo_api.tb_adicionar_documento(tipo, titulo, conteudo, dt_cadastro)
                                    values(?, ?, ?, ?);
    `;


    let respostas = await con.query(comando, [documentacao.tipo, documentacao.titulo, documentacao.conteudo, documentacao.dataCadastro]);
    let info = respostas[0];


    return info.insertId;
}


export async function consultarDocumentacao() {
    const comando = `
        select  tipo        tipo,
                titulo      titulo,
                conteudo    conteudo,
                dt_cadastro dataCadastro
        from    db_autonomo_api.tb_adicionar_documento;
    `;


    let resposta = await con.query(comando);
    let registros = resposta[0];


    return registros;
}


export async function alterarDocumentacao(id) {
    const comando = `
        update from db_autonomo_api.tb_adicionar_documento
           set  tipo = ?,
                titulo = ?,
                conteudo = ?,
                dt_cadastro = ?
         where  id_adicionar_documento = ?;
    `;


    let respostas = await con.query(comando, [documentacao.tipo, documentacao.titulo, documentacao.conteudo, documentacao.dataCadastro, id]);
    let info = respostas[0];


    return info.affectedRows;
}


export async function removerDocumentacao(id) {
    const comando = `
        delete from db_autonomo_api.tb_adicionar_documento
         where id_adicionar_documento = ?;
    `;


    let respostas = await con.query(comando, [id]);
    let info = respostas[0];


    return info.affectedRows;
}