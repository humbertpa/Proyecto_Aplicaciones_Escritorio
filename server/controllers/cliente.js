const { response } = require('express');
const Cliente = require('./../models/cliente');
const { ObjectId } = require('mongodb');

class ControladorCliente {

    static agregar(req, res) {
        console.log("Entro al controlador de agregar cliente");
        console.log(req.body);
        console.log(req.user);

        const { nombre, correo, contacto, organizacion, proyecto } = req.body;
        console.log('=============================================================');
        console.log(nombre, correo, contacto, organizacion, proyecto, req.user.correo);
        console.log('=============================================================');


        const cliente = new Cliente({
            nombre, correo, contacto, organizacion, proyecto, correo_usuario: req.user.correo
        });

        console.log(cliente);

        cliente.save()
            .then(clienteNuevo => {
                const { nombre, correo, contacto, organizacion, proyecto } = clienteNuevo;
                console.log("Cliente guardado correctamente");
                res.status(200).json({ nombre, correo, contacto, organizacion, proyecto });
            }).catch(error => {
                console.error(error);
                res.status(500).send('Error al agregar cliente');
            })
    }

    static listar(req, res) {
        console.log("Entro al controlador de listar clientes cliente");
        console.log(req.user);
        Cliente.find({ correo_usuario: req.user.correo })
            .then(listaDeClientes => {
                console.log('Se recupero la lista de clientes');
                //console.log(listaDeClientes);

                const clientes = listaDeClientes.map(cliente => {
                    const { nombre, correo, contacto, organizacion, proyecto } = cliente;
                    return { nombre, correo, contacto, organizacion, proyecto };
                });
                //console.log(clientes);
                res.status(200).json(clientes);
            })
            .catch(error => {
                console.error(error);
                res.status(500).send('Error al recuperar la lista de clientes'); // Enviar un mensaje de error en caso de fallo
            });
    }

    static mostrar(req, res) {
        console.log("Entro al controlador de mostrar cliente");
        //console.log(req.user);
        //console.log(req.params);

        Cliente.find({ nombre: req.params.nombre, correo_usuario: req.user.correo })
            .then(resultado => {
                console.log('Registros encontrados:');
                console.log(resultado);
                res.status(200).json(resultado);
            })
            .catch(error => {
                console.error(error);
                res.status(500).send('Error al buscar registros');
            });
    }

    static editar(req, res) {
        console.log("Entro al controlador de editar cliente");
        console.log(req.user);
        console.log(req.body);
        console.log(req.params);

         Cliente.updateOne({ _id: new ObjectId(req.params.id), correo_usuario: req.user.correo }, { $set: req.body })
            .then(resultado => {
                console.log('Registro Editado Exitosamente');
                console.log(resultado);
                res.status(200).json(resultado);
            })
            .catch(error => {
                console.error(error);
                res.status(500).send('Error al editar Registro');
            }); 
    }
}

module.exports = ControladorCliente;