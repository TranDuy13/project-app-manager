const express = require('express')
const Controller = require('../controllers/product.controller')
const jwtServices = require("../services/jwt.services")
const router = express.Router()

router.delete('/deleteProduct/:id', Controller.deleteProduct)
router.put('/updateProduct', jwtServices.verify, Controller.updateProduct)
// router.post('/createProduct', jwtServices.verify, Controller.createProduct)
router.post('/createProduct', Controller.createProduct)
router.get('/getProductByAuthor/:FK_Author', Controller.getProductByAuthor)
router.get('/getProduct/:id', Controller.getProduct)
router.get('/getAllProducts', Controller.getAllProduct)



module.exports = router