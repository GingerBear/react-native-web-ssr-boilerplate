process.env.BABEL_ENV = 'development';
require('babel-register');

const express = require('express');
const ssr = require('./ssr');

const port = process.env.PORT || 3000;
const app = express();

app.use(ssr.default);

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(`Express listening on port ${port}`);
  }
});
