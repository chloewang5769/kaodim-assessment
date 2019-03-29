var routes = require('./vendor.routes.js');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());
app.set('view engine', 'ejs');
routes(app);
app.set('port', 3200);

app.listen(app.get('port'), function() {
    console.log('Server running on PORT: ' + app.get('port') + ' at ' + Date(new Date()));
});
