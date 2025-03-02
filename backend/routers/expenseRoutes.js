const express = require('express');
const { getAllExpenses, createExpense } = require('../controllers/expenseController');
const router = express.Router();

module.exports = (pool) => {
  router.get('/', async (req, res) => {
    try {
      const expenses = await getAllExpenses(pool);
      res.json(expenses);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  });

  router.post('/', async (req, res) => {
    try {
      const newExpense = await createExpense(pool, req.body);
      res.status(201).json(newExpense);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  });

  return router;
};
