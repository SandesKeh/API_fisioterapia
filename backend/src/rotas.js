import usuarioController from './controller/userController.js'
import usuarioCliente from './controller/userClienteController.js'


export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(usuarioCliente);
}