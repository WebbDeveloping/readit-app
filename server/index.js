const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const app = express();
const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Knock Knock.. It's port ${PORT}`);
});
