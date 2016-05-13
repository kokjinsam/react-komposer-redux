## Redux for React Komposer

> For more information on React Komposer, see [here](https://github.com/kadirahq/react-komposer).

### Installation

```
npm install --save react-komposer-redux mantra-core
```

> mantra-core is peerDependency of react-komposer-redux

### Usage

Here's an example of a Mantra container:

```
import ComponentA from '../../components/component-a';
import composeWithRedux from 'react-komposer-redux';
import { useDeps, composeAll } from 'mantra-core';

export const mapStateToProps = ({ layout }) => {
  // layout is from reducers
  const { windowWidth } = layout;
  const data = {
    windowWidth,
  };

  return data;
};

export const mapDepsToProps = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithRedux(mapStateToProps),
  useDeps()
)(ComponentA);
```
