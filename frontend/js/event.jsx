import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import { addPoints } from './actions';
import { ItemTypes } from './constants';

const eventTarget = {
  drop(props, monitor, component) {
    console.log('dropped', component);
    component.store.dispatch(addPoints(component.props.points, monitor.getItem().id));
  },
};

function collect(connector, monitor) {
  return {
    connectDropTarget: connector.dropTarget(),
    hovering: monitor.isOver(),
  };
}

let Event = ({ points, connectDropTarget, hovering }) => connectDropTarget(
  <div
    className="wsl-event col-md-9"
    style={hovering ? { background: 'yellow' } : { background: 'white' }}
  >
    <h3>{points}</h3>
  </div>
);

const stateMap = state => ({
  selected: state.selectedAthlete,
});

export default DropTarget(ItemTypes.ATHLETE_TILE, eventTarget, collect)(connect(stateMap)(Event));
