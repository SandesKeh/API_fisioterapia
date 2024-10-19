import * as db  from '../repository/pacotesRepository.js';
import { Router } from 'express';

const endpoint = Router();

endpoint.post('/insert/pacotes', async (req,resp) => {
    try{
        let pacoteOjs= req.body;
    
        let id = await db.inserirPacotes(pacoteOjs);

        resp.send({
            id: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
        
})


endpoint.get('/consultar/pacotes', async (req,resp) => {
    try {
        let o = await db.consultarPacotes()

        resp.send(o)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
        
})

endpoint.put('/alterar/pacotes/:id', async (req, resp) => {
    try {
        let pacoteOjs = req.body;
        let i = req.params;

        let respost = await db.alterarPacotes(pacoteOjs, i);

        if (respost = undefined ) {
            resp.send({
                resposta: "alterado com sucesso "   
            })
        }
        else {
            resp.status(404).send({erro: "Nenhum pacote encontrado"})
        }
           
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
     
})


endpoint.delete('/deletar/pacote/:id', async (req, resp) =>{
    try {
        let id = req.params.id;

        let respot = await db.deletarPacotes(id);
        if (respot = undefined ) {
            resp.send({
                respota: "deletado com sucesso"
            })
        }
        else{
            resp.status(404).send({erro: "Nenhum pacote encontrado"})
        }
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
      
})
export default endpoint;