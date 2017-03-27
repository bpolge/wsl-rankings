import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { addAthlete } from './actions'; 
import AthleteList from './container';

const store = createStore(reducer);
$(() => {
  $.get('/athletes', items => items.map(item => {
    store.dispatch(addAthlete(item));
  }));
});

render(
  <Provider store={store}>
    <AthleteList />
  </Provider>,
  global.document.getElementById('athlete-list')
);
