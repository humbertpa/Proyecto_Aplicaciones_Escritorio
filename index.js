const express = require('express');
const rutas = require('./rutas');
const apiRoutes = require('./src/rutas');
require('dotenv').config();
const { engine } = require('express-handlebars'); 

const port = process.env.PORT || 3000;
const app = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerOptions = require('./swagger.config');
const swaggerDocs= swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('',apiRoutes);
rutas(app);



const mongoose = require('mongoose');
const username = 'usuario_tarea5';      /// actualizar username
const password = 'usuario_tarea5';      /// actualizar password


const mongoUrl = 'mongodb+srv://'+username+':'+password+'@clusterescritorio.rn2dgpb.mongodb.net/?retryWrites=true&w=majority'

console.log(mongoUrl);

mongoose.connect(mongoUrl).then(() => {
    console.log('Se conectó correctamente');

    app.listen(port, () => {
        console.log("app is running in port " + port);
    });

}).catch(err => {
    console.log('No se pudo conectar a la base de datos');
    console.log(err);
})
