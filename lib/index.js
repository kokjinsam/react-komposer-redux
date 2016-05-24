'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeReduxBase = composeReduxBase;
exports.default = composeWithRedux;

var _reactKomposer = require('react-komposer');

function composeReduxBase(fn, props, onData) {
  if (!props.context) {
    throw new Error('No context passed as prop.');
  }

  var context = typeof props.context === 'function' ? props.context() : props.context;

  var Store = context.Store || context.store;

  if (!Store) {
    throw new Error('No store found in the context');
  }

  var processState = function processState() {
    try {
      var state = Store.getState();
      var data = fn(state, props);
      onData(null, data);
    } catch (ex) {
      onData(ex);
    }
  };

  processState();
  Store.subscribe(processState);
}

function composeWithRedux(fn) {
  return (0, _reactKomposer.compose)(composeReduxBase.bind(null, fn));
}