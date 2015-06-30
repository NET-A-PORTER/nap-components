'use strict';
var request = require("request");
var url = require('url');
var querystring = require('querystring');

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
        var baseURL = "www.net-a-porter.com";

        // stub for session count
        server.get('/webapi/feed/sessioncount/NAP.json',
            middleware.localisation,
            middleware.queryParams,
            function(req,res) {
                var requestUrl = url.format({
                    protocol: 'http:',
                    host: baseURL,
                    pathname: req.originalUrl,
                    query: querystring.stringify(res.locals.query)
                });
                var sessionurl = baseURL + req.originalUrl;
                request(requestUrl,function(err,request,response,body){
                    res.send(response);
                });
            }
        );

        // stub for product activity
        server.get('/webapi/feed/productactivity.json',
            middleware.localisation,
            middleware.queryParams,
            function(req,res) {
                var requestUrl = url.format({
                    protocol: 'http:',
                    host: baseURL,
                    pathname: req.originalUrl,
                    query: querystring.stringify(res.locals.query)
                });
                request(requestUrl,function(err,request,response,body){
                    res.send(response);
                });
            }
        );

    },


};

module.exports = {
    routes: routes
};