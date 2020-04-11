'use strict'

const Product = require('../models/product')


function getProducts (req, res) {
       
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `Error al reaizar la peticion : ${err}`})
        if (!products) return res.status(404).send({message: 'No existe Productos'})     
        res.send(200, { products })
    })
     
}//

function getProduct (req, res) {

    let productId = req.params.productId

     Product.findById(productId, (err, product) => {
          if (err) return res.status(500).send({message: `Error al reaizar la peticion : ${err}`})
          if (!Product) return res.status(404).send({message: `El producto no existe : ${err}`})
          res.status(200).send({ product })
     })
}//

function saveProduct (req, res) {

    console.log('POST /api/product')
    console.log(req.body)
    
    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description
    
    product.save((err, ProductStored) => {

    if (err) res.status(500).send({message: `Error al guardar en la base de datos ${err}`}) 
    res.status(200).send({product: ProductStored})
    
    }) 

}



function updateProduct (req, res) {

    let productId = req.params.productId//id del producto
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdate) => {
    
         if (err) res.status(500).send({message: `Error al Actualizar el producto : ${err}`})
         res.status(200).send({ product: productUpdate })

    })
    
}

function deleteProduct (req, res) {

    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
    
         if (err) res.status(500).send({message: `Error al borrar el producto : ${err}`})
         
         product.remove(err => {
              if (err) res.status(500).send({message: `Error al borrar el producto : ${err}`})
              res.status(200).send({message: 'El producto fue eliminado'})

         })
      
    })
    
}

module.exports = {
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}