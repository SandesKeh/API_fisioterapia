import * as bd from  '../repository/informacoesPessoaisRepository.js';
import { Router } from 'express';

const endpoint = Router();

endpoint.post('/inserir/infoPessoal', async (req,resp) => {
    let pessoaisObj = req.body;

    let id = await bd.inserirInfPessoais(pessoaisObj);
    
    resp.send({
        id: id
    })

})

endpoint.get('/consultar/infoPessoas', async (req, resp) => {

    let registro = await bd.consultarPessoais();
    resp.send(registro);
})

endpoint.delete('/deletar/infoPessoas/:id', async (req, resp) => {
    let id = req.params.id;

    let registro = await bd.deletaPossas(id);
    resp.send({
        resposta: "removido com sucesso!!"
    })
})


endpoint.put('/update/infoPessoas/:id', async (req, resp) => {
    let pessoaisObj = req.body;
    let id = req.params.id;
    let registro = await bd.updatePessoas(pessoaisObj, id);
    resp.send({
        resposta: "alterado com sucesso"
    })
})


export default endpoint;