
import usuarioController from './controller/userController.js'
import usuarioCliente from './controller/userClienteController.js'
import inventarioController from './controller/inventarioController.js'
import informacoesPessoaisController from  './controller/informacoesPessoaisController.js';
import pacotesController from './controller/pacotesController.js';
import infoFinanceiraController from './controller/infoFinanceiraController.js';
import enderecoController from './controller/enderecoController.js';
import responsavelController from './controller/responsavelController.js';
import agendaClienteController from './controller/agendaClienteController.js'
import agendaPessoalController from './controller/agendaPessoalController.js'
import notificacaoController from './controller/notificacaoController.js'


export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(usuarioCliente);
    servidor.use(inventarioController);
    servidor.use(informacoesPessoaisController);
    servidor.use(pacotesController);
    servidor.use(infoFinanceiraController);
    servidor.use(enderecoController);
    servidor.use(responsavelController);
    servidor.use(agendaClienteController);
    servidor.use(agendaPessoalController);
    servidor.use(notificacaoController);
}