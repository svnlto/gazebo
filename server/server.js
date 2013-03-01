var express   = require('express'),
    fs        = require('fs'),
    _         = require('underscore'),
    app       = express(),
    staticDir = express['static'];

module.exports = function(opts) {

  'use strict';

  opts = _.extend({
    port :      4444,
    tests :     true,
    baseDir :   './'
  }, opts || {});

  app.configure(function() {
    [ 'app', 'lib', 'assets', 'tests' ].forEach(function(dir) {
      app.use('/' + dir, staticDir(opts.baseDir + dir));
    });
    app.use(express.bodyParser());
  });

  app.get("/", function(req, res) {
    fs.createReadStream(opts.baseDir + 'app/index.html').pipe(res);
  });

  if (opts.tests) {
    app.get("/_test", function(req, res) {
      fs.createReadStream(opts.baseDir + 'tests/app/runner.html').pipe(res);
    });
  }

  // Actually listen
  app.listen(opts.port || null);

  console.log("Serving at http://localhost:" + (opts.port || ''));
};
