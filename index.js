'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

//conexion a db con mongoose
mongoose.connect(config.db, (err, res) => {
  
     if (err) {    
          return console.log(`Error al conectar a la base de datos ${err}`)   
     }

     console.log('Conexion a la base de datos establecida...')
   
     //escucha el servidor de express
     app.listen(config.port, () => {
          //console.log('Servidor web escuchando en el puerto 3000');
          console.log(`API REST  web localhost puerto : ${config.port}`)
     })
})

//npm start























//ojala no muera
//app.use(express.static(__dirname + '/public/')); 
/*
//creando servidor con express en el puerto 3000
const express = require('express');
const app = express();

app.listen(3000, () => {3

     Console.log('Hola Mundo')
     //Console.log('API REST en http://localhost:3000')
});*/



/*
//ejemplo de Get
app.get('/hola/:name',(req, res) => {
res.send({ message: `Hello ${req.parans.name}`})
})*/
