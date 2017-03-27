import React from 'react';

const Athlete = props => {
  const { name, rank, imgSrc } = props.athlete;
  const url = `/athletes/${name}`;
  return (
    <li>
      <div className="athlete-tile">
        <a className="headshot" href={url}>
          <img className="athlete-img" src={imgSrc} alt={name} /></a>
        <span className="text-wrap">
          <a href={url}>{name}</a>
          <span>{rank}</span>
        </span>
      </div>
    </li>);
};

Athlete.propTypes = {
  athlete: React.PropTypes.object
};

const AthleteList = ({ athletes }) => (
  <ul className="rankings">
    {athletes.map((athlete, idx) =>
      <Athlete
        key={idx}
        athlete={athlete}
      />
    )}
  </ul>
);

export { Athlete, AthleteList };
