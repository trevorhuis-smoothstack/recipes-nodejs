const express = require('express');
const helloRouter = require('./routes/helloRoute');

const app = express();

app.use('/hello', helloRouter);

module.exports = app;
