require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const { PORT, CONNECTION_STRING } = process.env;
const cc = require('./controllers/controller');

const app = express();
app.use(express.json());

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log(err);
  });
//Subs
app.get(`/api/getSubs`, cc.getSubs);
app.get(`/api/getPosts`, cc.getPosts);
app.get(`/api/subread/:id`, cc.getSubread);
//Posts
app.get(`/api/singlePost/:id`, cc.getSinglePost);
app.get(`/api/subPosts/:id`, cc.getPostsForSub);
app.post(`/api/postPost`, cc.postPost);

app.delete(`/api/deletePost/:id`, cc.deletePost);

app.listen(PORT, () => {
  console.log(`Knock Knock.. It's port ${PORT}`);
});
