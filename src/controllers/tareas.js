const Tarea = require('./../models/tarea');

class controladorTareas {


    static listar(req, res) {
        Tarea.find({}).lean
        .then(tareas => {
            res.render('tareas', { tareas })
        })
            .catch(err => {
                res.sendStatus(400);
            })
    }

    static ver(req, res) {
        Tarea.findById(req.params.id, (err, tarea) => {
            if (err) {
                console.error(err);
            } else {
                res.render('tarea', { tarea });
            }
        });
    }

    static subir(req, res) {
        Tarea.save((err, tarea) => {
            if (err) {
                console.error(err);
            } else {
                res.render('tarea', { tarea });
            }
        });
    }

    static editar(req, res) {
        Tarea.findByIdAndUpdate(req.params.id, newData, {new:true})
        .then(tareaEditada=>{
            res.render('tarea', tareaEditada);
        })
        .catch(err =>{
            console.error(err);
        });
    }

    static eliminar(req, res) {
        Tarea.findByIdAndDelete(req.params.id).then(tareaEliminada=>{
            res.render('tareaEliminada', tareaEliminada);
        })
        .catch(err =>{
            console.log(err);
        })
    }
}

/* 
router.get('',ControladorTareas.listar);
router.get(':id',ControladorTareas.ver);
router.post('', ControladorTareas.subir); 
router.put(':id', ControladorTareas.editar); 
router.delete('/:id',ControladorTareas.eliminar);
 */