'use strict';

/**
 * Module dependencies.
 */
var express = require('express');

module.exports = function(app) {
    // Setting the static folder
    app.use('/demo', express.static('demo'));
    app.use('/components', express.static('components'));
    app.use('/bower_components', express.static('bower_components'));
    app.use('/components.html', express.static('components.html'));
};