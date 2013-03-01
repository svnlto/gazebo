//
// ## app/config
//

require.config({
  deps:            window.mocha ? ['../tests/app/config'] : ['main'],
  paths: {
    lib:           '../lib/',
    tests:         '../tests',
    app:           '.'
  }
});

//
// requirejs error reporting
//
window.requirejs.onError = function (err) {
  "use strict";

  console.warn('require error: ', err.requireType);
  if (err.requireType === 'timeout') {
    console.warn('modules: ' + err.requireModules);
  }

  throw err;
};

if (!window.mocha) {
  require(['main']);
}
