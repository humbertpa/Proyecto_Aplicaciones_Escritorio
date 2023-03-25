const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class ControladorUsuario {

    static registrar(req, res) {
        const { correo, usuario, password } = req.body;

        const salt = bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt);

        const user = new Usuario({
            correo,
            usuario,
            password: hashedPassword
        })

        user.save((err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Usuario creado correctamente");
            }
        });
    }

    static login(req, res) {
        const { correo, password } = req.body;
        const user = Usuario.findOne({ correo });
        if (!user) {
            return res.status(400).send('Usuario o contraseña inválido');
        }
        const passwordValido = bcrypt.compare(password, user.password);
        if (!passwordValido) {
            return res.status(400).send('Usuario o contraseña inválido');
        }

        const token = jwt.sign({ _id: user._id }, 'jwtPrivateKey');
        res.header('Authorization', token).send('Login exitoso :)');
    }
}