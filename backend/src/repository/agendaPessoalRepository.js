import con from "./connection.js";


export async function inserirPessoalAgenda(pessoal) {
    let comando = `
        INSERT INTO tb_pessoal_cadastro_agenda (nome, data, repetir, horario, modo)
        VALUES (?, ?, ?, ?, ?)
    `;

    let resultado = await con.query(comando, [
        pessoal.nome,
        pessoal.data,
        pessoal.repetir,
        pessoal.horario,
        pessoal.modo
    ]);
    let fim = resultado[0]
    return fim.insertId; 
}

export async function consultarTodosPessoal() {
    let comando = `
        SELECT * FROM tb_pessoal_cadastro_agenda;
    `;

    let registros = await con.query(comando);
    return registros[0];
}


export async function consultarPessoalPorId(id) {
    let comando = `
        SELECT * FROM tb_pessoal_cadastro_agenda WHERE id_pessoal = ?;
    `;

    let registro = await con.query(comando, [id]);
    return registro[0]; 
}

export async function atualizarPessoal(id, pessoal) {
    let comando = `
        UPDATE tb_pessoal_cadastro_agenda 
        SET nome = ?, data = ?, repetir = ?, horario = ?, modo = ?
        WHERE id_pessoal = ?;
    `;

    let resultado = await con.query(comando, [
        pessoal.nome,
        pessoal.data,
        pessoal.repetir,
        pessoal.horario,
        pessoal.modo,
        id
    ]);
    let fim = resultado[0]
    return fim.affectedRows; 
}


export async function deletarPessoal(id) {
    let comando = `
        DELETE FROM tb_pessoal_cadastro_agenda WHERE id_pessoal = ?;
    `;

    let resultado = await con.query(comando, [id]);
    let fim = resultado[0]
    return fim.affectedRows; 
}



