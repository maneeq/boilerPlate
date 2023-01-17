const express = require('express');
const app = express();
const indexRouter = require('./indexRouter');
const port = process.env.PORT || 3000;
const connecDb= require('./db/db')
require('dotenv').config();

connecDb(); //database connection
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // f

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.use('/', indexRouter);