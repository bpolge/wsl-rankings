import React, { PropTypes } from 'react';

const Athlete = props => {
  const { name, rank, imgSrc, points } = props.athlete;
  const url = `/athletes/${name}`;
  return (
    <li>
      <div className="athlete-tile">
        <a className="headshot" href={url}>
          <img className="athlete-img" src={imgSrc} alt={name} /></a>
        <span className="text-wrap">
          <a href={url}>{name}</a>
          <span>{rank}</span><br />
          <span>{points}</span>
        </span>
      </div>
    </li>);
};

Athlete.propTypes = {
  athlete: PropTypes.object,
};

const AthleteList = ({ athletes }) => (
  <div className="col-md-3">
  <ul className="wsl-rankings">
    {athletes.map((athlete, idx) =>
      <Athlete
        key={idx}
        athlete={athlete}
      />
    )}
  </ul>
  </div>
);

export { Athlete, AthleteList };
