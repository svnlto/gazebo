require.config({
  paths: {
    'chai':                 '/tests/lib/chai',
    'sinon':                '/tests/lib/sinon'
  },
  shim: {
    'chai': {
      exports: 'expect'
    },
    'sinon': {
      exports: 'sinon'
    }
  }

});

require([
  'chai',
  'sinon'
], function (chai, sinon) {

  'use strict';

  window.expect = chai.expect;
  window.mocha.setup({
    ui: 'bdd',
    reporter: window.mocha.reporters.HTML,
    ignoreLeaks: true
  });

  require([
    // require tests here:
    // 'tests/app/',
  ], function () {
    window.mocha.run();
  });

});
