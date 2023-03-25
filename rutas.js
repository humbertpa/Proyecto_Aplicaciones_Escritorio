const path=require('path');
const express = require('express');

module.exports = function (app) {
    app.use('/assets', express.static(path.join(__dirname, 'assets')))

    app.get('/', function(req,res){
        res.render('inicio',{
            nombre: 'Humberto'
        });
    });
}