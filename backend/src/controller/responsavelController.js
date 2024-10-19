import * as db from '../repository/responsavelRepository.js';
import { Router } from 'express';

const endpoint = Router();

endpoint.post('/inserir/responsavel', async (req,resp) => {
    let responsavelObj = req.body;

    let registro = await db.inserirResponsavel(responsavelObj)

    resp.send({
        id: registro
    })
})

endpoint.get ('/consultar/responsavel', async (req,resp) => {
    let registro = await db.consultarResponsavel()

    resp.send(registro)
})

endpoint.put('/alterar/responsavel/:id', async (req,resp) => {
    let responsavelObj = req.body;
    let id = req.params.id;

    let registro = await db.alterarResponsavel(responsavelObj, id)

    resp.send({
        resposta: "alterado com sucesso"
    })
})

endpoint.delete('/deletar/responsavel/:id', async (req,resp) => {
    let id = req.params.id;

    let registro= await db.deletarResponsavel(id)

    resp.send({
        resposta: "removido com sucesso"
    })
})
export default endpoint;