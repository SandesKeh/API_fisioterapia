import { gerarToken } from "../utils/jwt.js";
import * as db from '../repository/userRepository.js'

import {Router} from 'express';
const endpoints = Router();


endpoints.post('/login/', async (req, resp) => {
    try {
        let usuario = req.body;

        let autonomo = await db.validarUsuario(usuario);


        if (autonomo == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)"})
        }else {
            let chaveToken = gerarToken(autonomo);
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



endpoints.post('/usuario/', async (req, resp) => {
    try {
        let usuario = req.body;

        let id = await db.inserirUsuario(usuario);

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