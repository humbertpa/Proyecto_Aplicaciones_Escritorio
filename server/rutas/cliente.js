const router = require('express').Router();
const ControladorCliente = require('../controllers/cliente');
const auth = require('./../middlewares/auth');

router.post('/agregar', auth, ControladorCliente.agregar);
//router.get('/:id',ControladorCliente.recuperar);

module.exports=router;