const router = require('express').Router();
const ControladorUsuario = require('./../controllers/usuario');

router.post('', ControladorUsuario.registrar);
router.post('', ControladorUsuario.login);

module.exports=router;
