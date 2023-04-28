const Cliente = require('./../models/cliente');

class ControladorCliente {

    static agregar(req,res){
        const {tipo,nombre,correo,telefono} = req.body;
        const cliente = new Cliente({
            tipo,
            nombre,
            correo,
            telefono,
            usuario: req.usuario._id
        });

        cliente.save((err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Cliente agregado correctamente');
            }
        });

    }

    static recuperar(req, res) {
    
        Cliente.findOne({nombre: req.params.nombre}, (err) => {
            if (err) {
                console.error(err);
            } else {
                res.send('Cliente', { Cliente });
            }
        });
    }
}

module.exports = ControladorCliente;