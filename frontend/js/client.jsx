import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { addAthlete } from './actions';
import AthleteList from './container';
import CtEvent from './event.jsx';

require('../sass/styles.scss');

const store = createStore(reducer);
$(() => {
  $.get('/athletes', items => items.map(item => {
    store.dispatch(addAthlete(item));
  }));
});

const App = () => (
  <div className="row">
    <AthleteList />
    <CtEvent />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById('wsl-app')
);
