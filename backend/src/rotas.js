
import usuarioController from './controller/userController.js'
import usuarioCliente from './controller/userClienteController.js'
import inventarioController from './controller/inventarioController.js'
import informacoesPessoaisController from  './controller/informacoesPessoaisController.js';
import pacotesController from './controller/pacotesController.js';
import infoFinanceiraController from './controller/infoFinanceiraController.js';

export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(usuarioCliente);
    servidor.use(inventarioController);
    servidor.use(informacoesPessoaisController);
    servidor.use(pacotesController);
    servidor.use(infoFinanceiraController);

}