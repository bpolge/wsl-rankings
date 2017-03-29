import React from 'react';
import { connect } from 'react-redux';
import { Athlete, AthleteList } from './athlete.jsx';
import { toggleSelected } from './actions';

const AthletesContainer = ({ dispatch, athletes, selectedAthlete }) => {
  function classForItem(item) {
    let className = 'athlete-list-item';
    className += item.id === selectedAthlete ? ' selected' : '';
    return className;
  }

  return (
    <AthleteList>
      {athletes.map(item =>
        <li
          key={item.id}
          className={classForItem(item)}
          onMouseUp={() => dispatch(toggleSelected(item.id))}
        >
          <Athlete athlete={item} />
        </li>
      )}
    </AthleteList>
  );
};

const mapListProps = state => ({
  athletes: state.athletes,
  selectedAthlete: state.selectedAthlete,
});
export default connect(mapListProps)(AthletesContainer);
