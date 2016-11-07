const tasks = require('express').Router();

const showMethod = (req, res) => res.json(`${req.method} task/${req.params.taskID}`);

tasks.route('/:taskID')
  .get(showMethod)
  .put(showMethod)
  .delete(showMethod);

tasks.route('/')
  .get(showMethod)
  .post(showMethod);

module.exports = tasks;
