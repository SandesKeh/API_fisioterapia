import con from './connection.js';

export async function inserirNotificacao(notificacao) {
    let comando = `
        INSERT INTO tb_notificacao (lembrete_sessao_email, msg_aniversario_email, 
        lembrete_sessao_whatsapp, msg_aniversario_whatsapp, 
        lembrete_sessao_sms, msg_aniversario_sms)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    let resultado = await con.query(comando, [
        notificacao.lembrete_sessao_email,
        notificacao.msg_aniversario_email,
        notificacao.lembrete_sessao_whatsapp,
        notificacao.msg_aniversario_whatsapp,
        notificacao.lembrete_sessao_sms,
        notificacao.msg_aniversario_sms
    ]);
    let fim = resultado[0]
    return fim.insertId; 
}


export async function consultarTodasNotificacoes() {
    let comando = `
        SELECT * FROM tb_notificacao;
    `;

    let registros = await con.query(comando);
    return registros[0];
}

export async function consultarNotificacaoPorId(id) {
    let comando = `
        SELECT * FROM tb_notificacao WHERE id_notificacao = ?;
    `;

    let registro = await con.query(comando, [id]);
    return registro[0]; 
}


export async function atualizarNotificacao(id, notificacao) {
    let comando = `
        UPDATE tb_notificacao 
        SET lembrete_sessao_email = ?, msg_aniversario_email = ?, 
        lembrete_sessao_whatsapp = ?, msg_aniversario_whatsapp = ?, 
        lembrete_sessao_sms = ?, msg_aniversario_sms = ?
        WHERE id_notificacao = ?;
    `;

    let [resultado] = await con.query(comando, [
        notificacao.lembrete_sessao_email,
        notificacao.msg_aniversario_email,
        notificacao.lembrete_sessao_whatsapp,
        notificacao.msg_aniversario_whatsapp,
        notificacao.lembrete_sessao_sms,
        notificacao.msg_aniversario_sms,
        id
    ]);
    let fim = resultado[0]
    return fim.affectedRows;
}


export async function deletarNotificacao(id) {
    let comando = `
        DELETE FROM tb_notificacao WHERE id_notificacao = ?;
    `;

    let resultado = await con.query(comando, [id]);
    let fim = resultado[0]
    return fim.affectedRows; 
}


