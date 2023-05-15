const router = require('express').Router();
const ControladorCliente = require('../controllers/cliente');
const auth = require('./../middlewares/auth');

router.post('/agregar', auth, ControladorCliente.agregar);
router.post('/editar/:id', auth, ControladorCliente.editar);
router.get('/listar', auth, ControladorCliente.listar);
router.get('/mostrar/:nombre', auth, ControladorCliente.mostrar);

module.exports = router;