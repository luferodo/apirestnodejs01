'use strict'

//modelado de la tabla producto de la tienda accesibes desde el index a travez de su instancia

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//modelado =>
const ProductSchema = Schema ({
    name : String,
    picture : String,
    price : { type: Number, default: 0 },
    category: { type: String, enum: ['computers', 'phones', 'accesories'] },
    descripcion: String
})

module.exports = mongoose.model('Product',ProductSchema)//podria instanciar luego este modelo