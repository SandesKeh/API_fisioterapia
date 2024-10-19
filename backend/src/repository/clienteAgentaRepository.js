import con from "./connection.js";


export async function inserirAgenda(clienteObj) {
    let comando = ` insert tb_cliente_cadastro_agenda (nome, data,  horario, repetir, modo, servico)
                values (?,?,?,?,?)
    `

    let resposta = await con.query(comando, [clienteObj.nome, clienteObj.data,  clienteObj.horario, clienteObj.repetir, clienteObj.modo, clienteObj.servico])

    return resposta[0].insertId
}