const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class ControladorUsuario {

    static async registrar(req, res) {
        console.log("================================== Entro a registrar en controller de usuario");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new Usuario({
            correo: req.body.email,
            usuario: req.body.username,
            password: hashedPassword
        })

        newUser.save()
            .then(usuarioGuardado => {
                console.log("Usuario creado correctamente");
                res.status(200).send('Usuario creado correctamente');
            }).catch(error => {
                console.error(error);
                res.status(500).send('Error interno del servidor');
            });

        console.log("terminó funcion registrar usuario en controlador usuario")

        const token = jwt.sign({ email: req.body.email }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
    }

    static async login(req, res) {
        console.log("================================== Entro a login en controller de usuario");

        const { email, password } = req.body;
        try {
            const user = await Usuario.findOne({ correo: email });
            if (!user) {
                console.log("usuario no encontrado");
                return res.status(400).send('Usuario o contraseña inválido');
            }

            const passwordValido = bcrypt.compare(password, user.password);

            if (!passwordValido) {
                console.log("password invalido");
                return res.status(400).send('Usuario o contraseña inválido');
            }

            console.log("todo salio bien");
            console.log(user);
            const token = jwt.sign({ email: req.body.email }, 'secret_key', { expiresIn: '1h' });
            res.json({ token });

        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
            return null;
        }
    }
}

module.exports = ControladorUsuario;