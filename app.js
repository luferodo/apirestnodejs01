/*contiene la configuracion de express
va ligado al router*/
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')
const hbs = require('express-handlebars')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
  }))
  app.set('view engine', '.hbs')

app.get('/login', (req, res) => {
res.render('login')
})

app.get('/', (req, res) => {
    res.render('product')
  })
  



app.use('/api', api)//api es el router


module.exports = app 