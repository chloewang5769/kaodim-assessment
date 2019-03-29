var controller = require('./vendor.controller.js');

module.exports = function(app) {
    app.post('/vendor', controller.create);
    
    app.get('/vendor', (req, res) => {
      return res.render('index');
    });

    app.get('/', function(req, res) {
      return res.send("Application is running");
    });
};
