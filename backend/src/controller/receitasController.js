import * as db from '../repository/receitasRepository.js'

import {Router} from 'express';
const endpoints = Router();


endpoints.get('/receitas/', async (req, resp) =>{
    try {
        let registros = await db.consultarReceitas();
        resp.send(registros);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.post('/receitas/', async (req, resp) => {
    try {
        let receita = req.body;

        let id = await db.inserirReceitas(receita);

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/receitas/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let receita = req.body;

        let linhasAfetadas = await db.alterarReceitas(id, receita);
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


endpoints.delete('/receitas/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerReceitas(id);
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