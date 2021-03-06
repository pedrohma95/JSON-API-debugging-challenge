const express = require('express');
const db = require('../models'); // index file in /models will direct require() to the right model
const helpers = require('./helpers/todos')

router.route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo)

router.route('/:todoId')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)

module.exports = router