import con from "./connection.js";

export async function inserirClienteAgenda(cliente) {
    let comando = `
        INSERT INTO tb_cliente_cadastro_agenda (nome, data, horario, repetir, modo, servico)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    let registro = await con.query(comando, [ cliente.nome, cliente.data, cliente.horario, cliente.repetir, cliente.modo, cliente.servico]);
    let fim = registro[0]
    return fim.insertId; 
}


export async function consultarTodosClientes() {
    let comando = `
        SELECT * FROM tb_cliente_cadastro_agenda;
    `;

    let registros = await con.query(comando);
    return registros[0];
}


export async function consultarClientePorId(id) {
    let comando = `
        SELECT * FROM tb_cliente_cadastro_agenda WHERE id_cliente = ?;
    `;

    let registro = await con.query(comando, [id]);
    return registro[0]; 
}

export async function atualizarCliente(id, cliente) {
    let comando = `
        UPDATE tb_cliente_cadastro_agenda 
        SET nome = ?,
        data = ?,
        horario = ?, 
        repetir = ?,
        modo = ?, 
        servico = ?
        WHERE id_cliente = ?;
    `;

    let resultado = await con.query(comando, [ cliente.nome,  cliente.data, cliente.horario, cliente.repetir, cliente.modo, cliente.servico, id]);
    let fim = resultado[0]
    return fim.affectedRows; 
}


export async function deletarCliente(id) {
    let comando = `
        DELETE FROM tb_cliente_cadastro_agenda 
        WHERE id_cliente = ?;
    `;

    let resultado = await con.query(comando, [id]);
    let fim = resultado[0]
    return fim.affectedRows; 
}
