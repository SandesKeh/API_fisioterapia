import * as bd from '../repository/agendaPessoalRepository.js'
import { Router } from "express";
const endpoint = Router();


endpoint.post('/inserir/agendaPessoal', async (req, resp) => {
    try {
        let pessoal = req.body;
        let registro = await bd.inserirPessoalAgenda(pessoal);
        resp.send({
            novoId: registro
        });
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


endpoint.get('/consulta/agendaPessoal', async (req, resp) => {
    let registros = await bd.consultarTodosPessoal();
    resp.send(registros);
});


endpoint.put('/atualizar/agendaPessoal/:id', async (req, resp) => { 
    try {
        let id = req.params.id;
        let pessoal = req.body;

        let agendaExiste = await bd.consultarPessoalPorId(id);
        if (!agendaExiste) {
            return resp.status(404).send({
                resposta: "Agenda pessoal não encontrada..."
            });
        }

        let linhasAfetadas = await bd.atualizarPessoal(id, pessoal); 
        if (linhasAfetadas === 0) {
            return resp.status(500).send({
                resposta: "Nenhum registro encontrado..."
            });
        } else {
            return resp.send({ resposta: "Atualizado com sucesso!" });
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


endpoint.delete('/deleta/agendaPessoal/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let agendaExiste = await bd.consultarPessoalPorId(id);
        if (!agendaExiste) {
            return resp.status(404).send({
                resposta: "Agenda pessoal não encontrada..."
            });
        }

        let linhasAfetadas = await bd.deletarPessoal(id); 
        if (linhasAfetadas === 0) {
            return resp.status(500).send({
                resposta: "Nenhum registro encontrado..."
            });
        } else {
            return resp.send({ resposta: "Removido com sucesso!" });
        }
    } catch (err) {
        return resp.status(400).send({
            erro: err.message
        });
    }
});

export default endpoint;
