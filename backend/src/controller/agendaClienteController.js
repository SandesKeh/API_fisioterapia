import * as bd from "../repository/agendaClienteRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.post('/inserir/agendaCliente', async (req, resp) => {
   try {
    let cliente = req.body;
    let registro = await bd.inserirClienteAgenda(cliente)
    resp.send({
        novoId: registro
    })
   } 
   catch (err) {
        resp.status(400).send({
        erro: err.message
    })
   }
})

endpoint.get('/consulta/agendaCliente', async (req, resp) => {
    let registro = await bd.consultarTodosClientes()
    resp.send(registro)
})

endpoint.put('/atualizar/agendaCliente/:id', async (req, resp) => { 
   try {
    let id = req.params.id;
    let cliente = req.body;

    let agendaExiste = await bd.consultarClientePorId(id);
        if (!agendaExiste) {
            return resp.status(404).send({
                resposta: "agenda não encontrado..."
            });
        }

        let linhasAfetadas = await bd.atualizarCliente(id, cliente); 
        if (linhasAfetadas === 0) {
            return resp.status(500).send({
                resposta: "não foi encontrado ninguem..."
            });
        } else {
            return resp.send({ resposta: "atualizado com sucesso!" });
        }
   } 

   catch (err) {
    resp.status(400).send({
        erro: err.message
    })
   }
})


endpoint.delete('/deleta/agendaCliente/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        
        let agendaExiste = await bd.consultarClientePorId(id);
        if (!agendaExiste) {
            return resp.status(404).send({
                resposta: "agenda não encontrado..."
            });
        }

        
        let linhasAfetadas = await bd.deletarCliente(id); 
        if (linhasAfetadas === 0) {
            return resp.status(500).send({
                resposta: "não foi encontrado ninguem..."
            });
        } else {
            return resp.send({ resposta: "Removido com sucesso!" });
        }
    } catch (err) {
        return resp.status(400).send({
            erro: err.message
        });
    }
})


export default endpoint