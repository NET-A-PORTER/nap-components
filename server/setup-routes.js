'use strict';

var configureRoutes = {

    init: function(server) {

        var apiStubs = require('./api-stubs');
        apiStubs.routes.init(server);

    }
};

module.exports = {
    configureRoutes: configureRoutes
};
