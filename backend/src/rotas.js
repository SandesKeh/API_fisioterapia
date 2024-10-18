import usuarioController from './controller/userController.js'
import usuarioCliente from './controller/userClienteController.js'
import inventarioController from './controller/inventarioController.js'


export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(usuarioCliente);
    servidor.use(inventarioController);
}