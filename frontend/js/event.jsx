import React from 'react';
import { connect } from 'react-redux';
import { addPoints } from './actions';

let Event = ({ dispatch }) => (
  <div className="wsl-event col-md-9">
    <button
      id="add-points"
      onClick={e => {
        e.preventDefault();
        dispatch(addPoints(1));
      }} />
  </div>
);

export default connect()(Event);
