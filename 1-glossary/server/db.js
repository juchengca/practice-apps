require("dotenv").config();

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  }
})

function dbAdd(newWord, newDefinition, callback) {

  mongoose.connect("mongodb://localhost:27017/glossary", {
    useNewUrlParser: "true",
  })
  mongoose.connection.on("error", err => {
    console.log("err", err)
  })
  mongoose.connection.on("connected", (err, res) => {
    //console.log("mongoose is connected")
  })

  const Word = mongoose.model('Word', schema);

  const word = new Word({ word: newWord, definition: newDefinition });

  word.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      //console.log('mongoose write success!');
      callback();
      //mongoose.connection.close();
    }
  });
};

function dbRead(callback) {
  mongoose.connect("mongodb://localhost:27017/glossary", {
    useNewUrlParser: "true",
  })
  mongoose.connection.on("error", err => {
    console.log("err", err)
  })
  mongoose.connection.on("connected", (err, res) => {
    //console.log("mongoose is connected")
  })

  const Word = mongoose.model('Word', schema);

  Word.find({}, function (err, res) {
    if (err) {
      callback(err, null);
      //mongoose.connection.close();
    } else {
      //console.log('mongoose read success');
      callback(null, res);
      //mongoose.connection.close();
    }
  });
};

function dbDelete(word, callback) {
  mongoose.connect("mongodb://localhost:27017/glossary", {
    useNewUrlParser: "true",
  })
  mongoose.connection.on("error", err => {
    console.log("err", err)
  })
  mongoose.connection.on("connected", (err, res) => {
    //console.log("mongoose is connected")
  })

  const Word = mongoose.model('Word', schema);

  Word.deleteOne({word: word}, (err, res) => {
    if (err) {
      console.log('delete error: ', err);
      callback(err, null);
    } else {
      //console.log('delete success');
      callback(null, res);
    }
  });
};

module.exports = { dbAdd, dbRead, dbDelete }