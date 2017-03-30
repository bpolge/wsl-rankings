import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './constants';

const athleteSource = {
  beginDrag(props) {
    console.log('begin drag:', props);
    return {
      id: props.athlete.id,
    };
  },
};

function collect(connect) {
  return {
    connectDragSource: connect.dragSource(),
  };
}

let Athlete = props => {
  const { name, rank, imgSrc, points } = props.athlete;
  const { connectDragSource } = props;
  const url = `/athletes/${name}`;
  return connectDragSource(
    <div className="athlete-tile">
      <a className="headshot" href={url}>
        <img className="athlete-img" src={imgSrc} alt={name} /></a>
      <span className="text-wrap">
        <a href={url}>{name}</a>
        <span>{rank}</span><br />
        <span>{points}</span>
      </span>
    </div>);
};

Athlete.propTypes = {
  athlete: PropTypes.object,
};

Athlete = DragSource(ItemTypes.ATHLETE_TILE, athleteSource, collect)(Athlete);

const AthleteList = ({ children }) => (
  <div className="col-md-3">
    <ul className="wsl-rankings">
      {children}
    </ul>
  </div>
);

AthleteList.propTypes = {
  children: PropTypes.node,
};

export { Athlete, AthleteList };
