import { gerarToken } from "../utils/jwt.js";
import * as db from '../repository/usuarioClienteRepository.js'

import {Router} from 'express';
const endpoints = Router();


endpoints.post('/logincliente/', async (req, resp) => {
    try {
        let cliente = req.body;

        let usuario = await db.validarUsuarioCliente(cliente);


        if (cliente == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)"})
        }else {
            let chaveToken = gerarToken(usuario);
            resp.send({
                "token": chaveToken
            })
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.post('/cliente/', async (req, resp) => {
    try {
        let cliente = req.body;

        let id = await db.inserirUsuarioCliente(cliente);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default endpoints;