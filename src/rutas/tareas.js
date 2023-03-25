const router = require('express').Router();
const ControladorTareas = require('./../controllers/tareas');

router.get('',ControladorTareas.listar);
router.get(':id',ControladorTareas.ver);
router.post('', ControladorTareas.subir); 
router.put(':id', ControladorTareas.editar); 
router.delete('/:id',ControladorTareas.eliminar);

module.exports=router;
