import { compose } from 'mantra-core';

export function composeReduxBase(fn, props, onData) {
  const { Store } = props.context();

  const processState = () => {
    try {
      const state = Store.getState();
      const data = fn(state, props);
      onData(null, data);
    } catch (ex) {
      onData(ex);
    }
  };

  processState();
  Store.subscribe(processState);
}

export default function composeWithRedux(fn) {
  return compose(composeReduxBase.bind(null, fn));
}
