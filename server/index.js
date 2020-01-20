require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const { PORT, CONNECTION_STRING } = process.env;
const cc = require('./controllers/controller');

const app = express();

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log(err);
  });

app.get(`/api/getPosts`, cc.getPosts);

app.listen(PORT, () => {
  console.log(`Knock Knock.. It's port ${PORT}`);
});
