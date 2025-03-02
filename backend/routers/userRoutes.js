const express = require('express');
const { getAllUsers, createUser } = require('../controllers/userController');
const router = express.Router();

module.exports = (pool) => {
  router.get('/', async (req, res) => {
    try {
      const users = await getAllUsers(pool);
      res.json(users);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  });

  router.post('/', async (req, res) => {
    try {
      const newUser = await createUser(pool, req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  });

  return router;
};
