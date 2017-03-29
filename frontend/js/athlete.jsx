import React, { PropTypes } from 'react';

const Athlete = props => {
  const { name, rank, imgSrc, points } = props.athlete;
  const url = `/athletes/${name}`;
  return (
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
