'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const taskRouter = require('./routes/tasks');
const homeRouter = require('./routes/index');

const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app = express();
const port = process.argv[2] || process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port ', port));

app.use(logger(isDev ? 'dev' : 'common'));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err, next);
  res.status(500).send('soomethings broken');
});

app.use('/tasks', taskRouter);
app.use('/', homeRouter);
