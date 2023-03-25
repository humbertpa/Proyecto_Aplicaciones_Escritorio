const router = require('express').Router();
const ControladorCliente = require('./../controllers/cliente');
const auth = require('./../middlewares/auth');

router.post('',auth, ControladorCliente.agregar);
router.get(':id',auth,ControladorCliente.recuperar);
module.exports=router;
