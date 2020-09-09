const express = require('express');
const helloRouter = require('./routes/helloRouter');

const app = express();

app.use('/hello', helloRouter);

module.exports = app;
