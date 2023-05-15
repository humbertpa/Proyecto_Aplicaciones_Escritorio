const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

async function auth(req, res, next) {
    console.log(req.header('Authorization').split(' ')[1]);
    const token = req.header('Authorization').split(' ')[1];
    //const token = req.header('Authorization');
    
    
    if (!token) return res.status(401).send('Acceso denegado. Token no provisto');
  
    try {
      const decoded = jwt.verify(token, 'secret_key');
      console.log(decoded);
      console.log(decoded.id);
      const user = await Usuario.findById(decoded.id);
      if (!user) return res.status(404).send('Usuario no encontrado');
  
      req.user = user;
      next();
    } catch (ex) {
      const decoded = jwt.verify(token, 'secret_key');
      console.log(decoded);
      console.log(decoded.id);
      res.status(400).send('Token inválido');
    }
  }
  
  module.exports = auth;