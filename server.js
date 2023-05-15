const express = require('express');
const rutas = require('./rutas');
require('dotenv').config();
const cors = require('cors');

const bodyParser = require('body-parser');



const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

app.use('', rutas);
/* app.use('', apiRoutes);
rutas(app);
 */
const mongoose = require('mongoose');
const username = 'userEscritorio';      /// actualizar username
const password = 'userEscritorio';      /// actualizar password

const mongoUrl = 'mongodb+srv://' + username + ':' + password + '@clusterescritorio.rn2dgpb.mongodb.net/?retryWrites=true&w=majority'

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