import con from './connection.js';


export async function inserirUsuarioCliente(cliente) {
    const comando = `
        insert into tb_login_cliente (email, senha) 
                        values (?, ?)
    `;


    let resposta = await con.query(comando, [cliente.email, cliente.senha])
    let info = resposta[0];


    return info.insertId;
}
   

export async function validarUsuarioCliente(cliente) {
    const comando = `
    select id_login_cliente,
    email
    from tb_login_cliente where email = ? and senha = ?
    `;

    let registros = await con.query(comando, [cliente.email, cliente.senha])
    return registros[0][0];

}

