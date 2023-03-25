const express = require('express');
const router = express.Router();
const tareasRoutes = require('./tareas');
const UserRoutes = require('./usuario');
const ClientRoutes = require('./cliente');

router.use('',express.json());

router.use('/tareas',tareasRoutes);
router.use('/usuario',UserRoutes);
router.use('/cliente',UserRoutes);

module.exports = router;
