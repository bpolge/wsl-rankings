import React from 'react';
import { connect } from 'react-redux';
import { addPoints } from './actions';

let Event = ({ dispatch, selected }) => (
  <div className="wsl-event col-md-9">
    <button
      id="add-points"
      onClick={e => {
        e.preventDefault();
        dispatch(addPoints(1000, selected));
      }} />
  </div>
);

const stateMap = state => ({
  selected: state.selectedAthlete,
});

export default connect(stateMap)(Event);
