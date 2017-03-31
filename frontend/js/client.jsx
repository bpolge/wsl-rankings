import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import $ from 'jquery';

import reducer from './reducers';
import { addAthlete } from './actions';
import AthleteList from './container.jsx';
import CtEvent from './event.jsx';

require('../sass/styles.scss');

const store = createStore(reducer);
$(() => {
  $.get('/athletes', items => items.map(item => {
    store.dispatch(addAthlete(item));
  }));
});

const pointBreakdown = [100,200,500,1000,2000];
let App = () => (
  <div className="row">
    <AthleteList />
    <ul>
      {pointBreakdown.map(p => (
        <li><CtEvent points={p} /></li>
      ))}
    </ul>
  </div>
);
App = DragDropContext(HTML5Backend)(App);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById('wsl-app')
);
