import * as db  from '../repository/pacotesRepository.js';
import { Router } from 'express';

const endpoint = Router();

endpoint.post('/insert/pacotes', async (req,resp) => {
    let pacoteOjs= req.body;
    
    let id = await db.inserirPacotes(pacoteOjs);

    resp.send({
        id: id
    })
})


endpoint.get('/consultar/pacotes', async (req,resp) => {
    let o = await db.consultarPacotes()

    resp.send(o)
})

endpoint.put('/alterar/pacotes/:id', async (req, resp) => {
    let pacoteOjs = req.body;
    let i = req.params;

    let respost = await db.alterarPacotes(pacoteOjs, i);

    resp.send({
       resposta: "alterado com sucesso "   
    })
})

endpoint.delete('/deletar/pacote/:id', async (req, resp) =>{
    let id = req.params.id;

    let respot = await db.deletarPacotes(id);

    resp.send({
        respota: "deletado com sucesso"
    })
})
export default endpoint;