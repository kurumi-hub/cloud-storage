const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

module.exports = (pool) => {
  router.get('/', async (req, res) => {
    try {
      const products = await getAllProducts(pool);
      res.json(products);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  });

  router.post('/', async (req, res) => {
    try {
      const newProduct = await createProduct(pool, req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  });

  return router;
};
