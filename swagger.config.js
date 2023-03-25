const port= process.env.PORT || 3000;

module.exports={
    swaggerDefinition:{
        swagger: "2.0",
        info: {
            title: 'Api de Tareas',
            description: 'api para adminitrar tareas',
            version:'1.0.0',
            servers: ['http://localhost:' + port]
        }
    },
    apis:['src/rutas/*.js']
}