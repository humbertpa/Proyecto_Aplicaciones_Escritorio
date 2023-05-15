const { response } = require('express');
const Cliente = require('./../models/cliente');

class ControladorCliente {

    static agregar(req,res){
        console.log("Entro al controlador de agregar cliente");
        console.log(req.body);
        console.log(req.user);

        const {nombre,correo,contacto,organizacion,proyecto} = req.body;
        console.log('=============================================================');
        console.log(nombre,correo,contacto,organizacion,proyecto,req.user.correo);
        console.log('=============================================================');
        

        const cliente = new Cliente({
            nombre,correo,contacto,organizacion,proyecto,correo_usuario : req.user.correo
        });

        console.log(cliente);

        cliente.save()
        .then(clienteNuevo=>{
            const {nombre,correo,contacto,organizacion,proyecto} = clienteNuevo;
            console.log("Cliente guardado correctamente");
            res.status(200).json({nombre,correo,contacto,organizacion,proyecto});
        }).catch(error =>{
            console.error(error);
            res.status(500).send('Error al agregar cliente');
        })
    }

}

module.exports = ControladorCliente;