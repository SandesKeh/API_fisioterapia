import con from './connection.js';


export async function inserirUsuario(cliente) {
    const comando = `
        insert into tb_login_autonomo (email, senha) 
                        values (?, ?)
    `;


    let resposta = await con.query(comando, [cliente.email, cliente.senha])
    let info = resposta[0];


    return info.insertId;
}


export async function validarUsuario(usuario) {
    const comando = `
        select 
            id_login_autonomo   id,
            email               email
        from tb_login_autonomo 
        where 
            email = ?
            and senha = ?
    `;

    let registros = await con.query(comando, [usuario.email, usuario.senha])
    return registros[0][0];

}

