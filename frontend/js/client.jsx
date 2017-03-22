import React from 'react';
import ReactDOM from 'react-dom';

import AthleteItem from './athlete.jsx';

$(() => {

  // Need to add handlebars here at some point
  function append(elems) {
    ReactDOM.render(
      <ul className="rankings">
        { elems.map((elem, idx) => React.createElement(AthleteItem, { key: idx, athlete: elem }))}
      </ul>,
      global.document.getElementById('athlete-list'));
  }

  $.get('/athletes', append);
});

