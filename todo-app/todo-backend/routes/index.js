const express = require('express');
const router = express.Router();

const configs = require('../util/config')

const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
	const addedTodos = await redis.getAsync('added_todos')

  res.json({ added_todos: Number(addedTodos) })
})

module.exports = router;
