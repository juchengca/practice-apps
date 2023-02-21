require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
var bodyParser = require('body-parser');

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/****
 *
 *
 * Other routes here....
 *
 *
 */


app.post('/submit', (req, res) => {
  var info = req.body;
  info.sid = req.session_id;
  db.dbQuery(info, (resCode) => {
    if (resCode === 0) {
      res.send('session limit reached')
    } else {
      res.send('server submit success');
    }
  });
});



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
