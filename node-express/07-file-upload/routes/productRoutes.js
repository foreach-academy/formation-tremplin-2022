const express = require('express');
const router = express.Router();

const {
  createProduct,
  getAllProducts
} = require('../controllers/productController.js');
const uploadProductImage = require('../controllers/uploadsController.js');

router.route('/').get(getAllProducts).post(createProduct);
router.route('/uploads').post(uploadProductImage);

module.exports = router;
