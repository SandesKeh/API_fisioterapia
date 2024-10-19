import * as db from '../repository/profissionalRepository.js'

import {Router} from 'express';
const endpoints = Router();



endpoints.get('/usuario/profissional', async (req, resp) =>{
    try {
        let registros = await db.consultarProfissional();
        resp.send(registros);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.post('/usuario/profissional', async (req, resp) => {
    try {
        let profissional = req.body;

        let id = await db.inserirProfissional(profissional);

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/usuario/profissional:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let profissional = req.body;

        let linhasAfetadas = await db.alterarInventario(id, profissional);
        if (linhasAfetadas >= 1) {
            resp.send();
        } else {
            resp.status(404).send({erro: 'Nenhum inventario encontrado'})
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete('/usuario/profissional:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerInventario(id);
            if (linhasAfetadas >= 1) {
                resp.send();
            } else {
                resp.status(404).send({erro: 'Nenhum inventario encontrado'});
            }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default endpoints;