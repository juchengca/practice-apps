const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });
const tableQuery = "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, "
  + "Name varchar(255), Email varchar(255), Password varchar(255), "
  + "Address1 varchar(255), Address2 varchar(255), City varchar(255), State varchar(255), Zip varchar(255), Phone varchar(255), "
  + "CC varchar(255), Expiration varchar(255), CVV varchar(255), BZip varchar(255), SID varchar(255))";

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => db.queryAsync(tableQuery))
  .catch((err) => console.log(err));

const dbQuery = function (info, callback) {
  var i = info;

  var checkQuery = "SELECT * FROM responses WHERE SID = '" + info.sid + "'";

  var query = 'INSERT INTO responses (Name, Email, Password, Address1, Address2, City, State, Zip, Phone, CC, Expiration, CVV, Bzip, SID) '
  + `VALUES ("${i.name}", "${i.email}", "${i.password}", "${i.line1}", "${i.line2}", "${i.city}", "${i.state}", "${i.zip}", "${i.phone}", `
  + `"${i.cc}", "${i.exp}", "${i.cvv}", "${i.bzip}", "${i.sid}")`;
  db.connectAsync()
  .then(() => db.queryAsync(checkQuery))
  .then((result) => { if (result[0].length > 0) {
    callback(0);
  } else {
    db.queryAsync(query)
    .then(() => callback(1))
  }})
  .catch((err) => console.log(err));
};

module.exports = { db, dbQuery };
