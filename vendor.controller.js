var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chloe-intern"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Chloe Database Connected!");
});

exports.create = function(req, res) {
    var sql = "SELECT * FROM vendor WHERE Location = '" + req.body.location + "'" +
      " AND Availability <> '" + req.body.date + "'";

      con.query(sql, function (err, result) {
        if (err) throw err;
        return res.send(result);
      });
};
