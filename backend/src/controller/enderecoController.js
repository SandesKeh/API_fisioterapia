import * as db from '../repository/enderecoRepoditory.js';
import { Router } from 'express';

const endpoint = Router();

endpoint.post('/inserir/endereco', async (req,resp) => {
    let enderecoObjs= req.body;

    let registro = await db.inserirEndereco(enderecoObjs);

    resp.send({
        id: registro
    })
})

endpoint.get('/consultar/endereco', async (req,resp) => {
    let resgistro = await db.consultarEndereco()
    resp.send( resgistro)
    
})
endpoint.put('/alterar/endereco/:id', async (req,resp) =>{
    let enderecoObjs = req.body;
    let id = req.params.id;

    let resgistro = await db.alterarEndereco(enderecoObjs, id)

    resp.send({
        resposta: "alterado com sucesso"
    })
})

endpoint.delete('/deletar/endereco/:id', async (req,resp) => {
    let id = req.params.id;

    let registro = await db.deletarEndereco(id)

    resp.send({
        resposta: "Removido com sucesso"
    })
})
export default endpoint;