import * as db from '../repository/despesasRepository.js'

import {Router} from 'express';
const endpoints = Router();


endpoints.get('/despesas/', async (req, resp) =>{
    try {
        let registros = await db.consultarDespesas();
        resp.send(registros);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.post('/despesas/', async (req, resp) => {
    try {
        let despesa = req.body;

        let id = await db.inserirDespesas(despesa);

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/despesas/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let despesa = req.body;

        let linhasAfetadas = await db.alterarDespesas(id, despesa);
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


endpoints.delete('/despesas/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerDespesas(id);
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