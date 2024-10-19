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
    let comando=` select  in.id_informacoes_financeiro,
		            in.valor,
                    pa.nome,
                    pa.valor
                from tb_informacoes_financeiro in
                join tb_pacotes pa on in.id_pacotes = pa.id_pacotes`;
    let resposta = await con.query(comando)
    let into = resposta[0]

    return into
}