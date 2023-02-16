require("dotenv").config();
var db = require('./db.js');
const express = require('express');
const app = express();
const port = 9500;
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist/'))
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

app.get('/read', (req, res) => {
  db.dbRead((err, result) => {
    if (err) {
      console.log('err: ', err);
    } else {
      res.send(result)
    }
  });
})

app.post('/submit', (req, res) => {
  var word = req.body.word;
  var definition = req.body.definition;

  db.dbAdd(word, definition, () => {
    //console.log('word post submit successful');
    res.send();
  });

})

app.post('/delete', (req, res) => {
  var word = req.body.word.word;

  db.dbDelete(word, (err, result) => {
    if (err) {
      console.log('delete error: ', err);
      res.send();
    } else {
      //console.log('word delete successful');
      res.send();
    }
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})