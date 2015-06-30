var express = require('express')
var app = express()
 
 // set up express config
require('./server/express')(app);
 
// routes
require('./server/setup-routes').configureRoutes.init(app);

app.listen(8080)