'use strict';
var request = require("request");
var baseURL = "http://www.net-a-porter.com";

var middleware = {
    // simple middleware to set some settings
    localisation: function (req, res, next) {
        var obj = {
            channel: req.params.channel,
        };
        res.locals = obj;
        next(); 
    },
    queryParams: function (req, res, next) {
        res.locals.query = req.query;
        next(); 
    }    
};


var routes = {

    init: function(server) {
        // stub for session count
        server.get('/webapi/feed/sessioncount/NAP.json',
            middleware.localisation,
            middleware.queryParams,
            function(req,res) {
                var sessionurl = baseURL + req.originalUrl;
                request(sessionurl,function(err,request,response,body){
                    res.send(response);
                });
            }
        );
    }
};

module.exports = {
    routes: routes
};