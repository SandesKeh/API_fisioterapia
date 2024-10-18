import usuarioController from './controller/userController.js';
import usuarioCliente from './controller/userClienteController.js';
import informacoesPessoaisController from  './controller/informacoesPessoaisController.js';
import pacotesController from './controller/pacotesController.js';

export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(usuarioCliente);
    servidor.use(informacoesPessoaisController);
    servidor.use(pacotesController);
}