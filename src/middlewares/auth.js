const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

async function auth(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Acceso denegado. Token no provisto');
  
    try {
      const decoded = jwt.verify(token, 'jwtPrivateKey');
      const user = await Usuario.findById(decoded._id);
      if (!user) return res.status(404).send('Usuario no encontrado');
  
      req.user = user;
      next();
    } catch (ex) {
      res.status(400).send('Token inválido');
    }
  }
  
  module.exports = auth;