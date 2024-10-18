import * as db from '../repository/inventarioRepository.js'

import {Router} from 'express';
const endpoints = Router();



endpoints.get('/inventario/', async (req, resp) =>{
    try {
        let registros = await db.consultarInventario();
        resp.send(registros);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/inventario/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let registros = await db.consultarInventarioPorId(id);
        resp.send(registros[0]);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.post('/inventario/', async (req, resp) => {
    try {
        let inventario = req.body;

        let id = await db.inserirInventario(inventario);

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/inventario/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let inventario = req.body;

        let linhasAfetadas = await db.alterarInventario(id, inventario);
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


endpoints.delete('/inventario/:id', async (req, resp) => {
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