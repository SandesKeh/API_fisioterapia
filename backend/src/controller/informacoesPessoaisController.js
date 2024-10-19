import * as bd from  '../repository/informacoesPessoaisRepository.js';
import { Router } from 'express';

const endpoint = Router();

endpoint.post('/inserir/infoPessoal', async (req,resp) => {
    try{
        let pessoaisObj = req.body;

        let id = await bd.inserirInfPessoais(pessoaisObj);
    
        resp.send({
            id: id
        })

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
     
})


endpoint.get('/consultar/infoPessoas', async (req, resp) => {
    try {
        let registro = await bd.consultarPessoais();
        resp.send(registro);
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoint.delete('/deletar/infoPessoas/:id', async (req, resp) => {
    try{
        let id = req.params.id;

        let registro = await bd.deletaPossas(id);
            if (registro = undefined) {
                resp.send({
                    resposta: "removido com sucesso!!"
                })
            } else{
                resp.status(404).send({erro: 'Nenhuma pessoal encontrada'})
            }
    } 
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
                
})


endpoint.put('/update/infoPessoas/:id', async (req, resp) => {
    try{
        let pessoaisObj = req.body;
        let id = req.params.id;

        let registro = await bd.updatePessoas(pessoaisObj, id);
            if (registro =  undefined) {
                resp.send({
                    resposta: "alterado com sucesso"
                }) 
            }
            else {
                resp.status(404).send({erro: 'Nenhuma pessoal encontrada'})
            }
       
    } catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



export default endpoint;