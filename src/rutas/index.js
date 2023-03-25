const express = require('express');
const router = express.Router();
const tareasRoutes = require('./tareas');
const UserRoutes = require('./usuario');

router.use('',express.json());

router.use('/tareas',tareasRoutes);
router.use('/usuario',UserRoutes);

module.exports = router;
