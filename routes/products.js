const { getAllProduct } = require('../controllers/products')

const router = require('express').Router()

router.get('/',getAllProduct)



module.exports = router