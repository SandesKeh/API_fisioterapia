import con from './connection.js'



export async function inserirReceitas(receita) {
    const comando = `
        insert into db_autonomo_api.tb_adicionar_receita(proriedade, categoria_financeira, descricao, valor, data_pagamento, forma_pagamento, repetir, escolha_ocorrencia, observacao)
                                    values(?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;


    let respostas = await con.query(comando, [receita.propriedade, receita.categoriaFinanceira, receita.descricao, receita.valor, receita.dataPagamento, receita.formaPagemento, receita.repetir, receita.ocorrencia, receita.observacao]);
    let info = respostas[0];


    return info.insertId;
}


export async function consultarReceitas() {
    const comando = `
        select  propriedade             propriedade, 
                categoria_financeira    categoriaFinanceira,
                descricao               descricao,
                valor                   valor,
                data_pagamento          dataPagamento,
                forma_pagamento         formaPagamento,
                repetir                 repetira,
                escolher_ocorrencia     ocorrencia,
                observacao              observacao
        from    db_autonomo_api.tb_adicionar_receita;
    `;


    let resposta = await con.query(comando);
    let registros = resposta[0];


    return registros;
}


export async function alterarReceitas(id) {
    const comando = `
        update from db_autonomo_api.tb_adicionar_receita
           set  propriedade = ?, 
                categoria_financeira = ?,
                descricao = ?,
                valor = ?,
                data_pagamento = ?,
                forma_pagamento = ?,
                repetir = ?,
                escolher_ocorrencia = ?,
                observacao = ?
         where  id_adicionar_receita = ?;
    `;


    let respostas = await con.query(comando, [receita.propriedade, receita.categoriaFinanceira, receita.descricao, receita.valor, receita.dataPagamento, receita.formaPagemento, receita.repetir, receita.ocorrencia, receita.observacao, id]);
    let info = respostas[0];


    return info.affectedRows;
}


export async function removerReceitas(id) {
    const comando = `
        delete from db_autonomo_api.tb_adicionar_receita
         where id_adicionar_receita = ?;
    `;


    let respostas = await con.query(comando, [id]);
    let info = respostas[0];


    return info.affectedRows;
}