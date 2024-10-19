import con from "./connection.js";

export async function inserirFinanceiro(financeiroObj) {
   let comando = ` insert into tb_informacoes_financeiros ( id_pacotes, valor)
        values (?,?)
   ` 
   let resposta = await con.query(comando, [financeiroObj.pacotes, financeiroObj.valor])
   let into = resposta[0]

   return into.insertId
}

export async function consultarFinanceiro() {
    let comando=`select     p.id_pacotes,
		                    p.nome,
                            p.valor as valor_pacote,
                            i.id_informacoes_financeiro,
                            i.valor as valor_informacao
                from tb_pacotes p
                join tb_informacoes_financeiros i 
                on p.id_pacotes = i.id_pacotes`
                
    let resposta = await con.query(comando)
    let into = resposta[0]

    return into
}

export async function alterarFinanceiro(financeiroObj, id) {
    let comando = `update tb_informacoes_financeiros
                    set id_pacotes = ?,
                        valor =?
                    where id_informacoes_financeiro = ? 
    `
    let resposta = await con.query(comando, [financeiroObj.pacotes, financeiroObj.valor, id]);

    let into = resposta[0];
    return into.affectedRows;
}

export async function deletarFinanceiro(id) {
    let comando =` delete from tb_informacoes_financeiros
                    where id_informacoes_financeiro = ?
    `
    let resposta = await con.query(comando, [id]);

    let into = resposta[0]

    return into.affectedRows;
}