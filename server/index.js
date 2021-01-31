const express = require('express')
const getProducts = require('./getProducts')
const port = 4000
const products = require('../products.json')

const app = express()


app.get('/api/products', getProducts.allOfThem);

app.get('/api/products/:id', getProducts.getProductById);

app.get('/api/products/:price', getProducts.getProductPrice)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})
