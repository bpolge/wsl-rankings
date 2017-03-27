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
        <button name="add-points" onClick={props.onClick} />
      </div>
    </li>);
};

Athlete.propTypes = {
  athlete: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

const AthleteList = ({ athletes, onAthleteClick }) => (
  <ul className="rankings">
    {athletes.map((athlete, idx) =>
      <Athlete
        key={idx}
        athlete={athlete}
        onClick={() => onAthleteClick(idx)}
      />
    )}
  </ul>
);

export { Athlete, AthleteList };
