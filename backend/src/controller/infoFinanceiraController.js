import * as db from '../repository/infoFinanceiraRepository.js'
import { Router } from 'express';

const endpoint= Router();

endpoint.post('/inserir/financeiro', async (req,resp) => {
    try {
         
        let financeiroObj = req.body;
        let id = await db.inserirFinanceiro(financeiroObj);

        resp.send({
            id: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
        
})

endpoint.get('/consultar/financeiro', async (req,resp) =>{
    try {
        let registro = await db.consultarFinanceiro();
        resp.send(registro);
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoint;