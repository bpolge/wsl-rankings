
const athlete = (state, action) => {
  switch (action.type) {
    case 'ADD_ATHLETE':
      return {
        id: action.id,
        name: action.name,
        rank: action.rank,
        imgSrc: action.imgSrc,
      };
    case 'ADD_POINTS': {
      let points = state.points || 0;
      points += action.points;
      return Object.assign({}, state, { points });
    }
    case 'TOGGLE_SELECTED':
      return { ...state, selected: !state.selected };
    default:
      return state;
  }
};

const athletes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ATHLETE':
      return [
        ...state,
        athlete(undefined, action),
      ];
    case 'ADD_POINTS':
      return state.map(item => {
        if (action.id === item.id) {
          return athlete(item, action);
        }
        return item;
      });
    case 'TOGGLE_SELECTED':
      return state.map(item => {
        if (action.id === item.id) {
          athlete(item, action);
        }
        return ({ ...item, selected: false });
      });
    default:
      return state;
  }
};

const changeSelected = (state = 0, action) => {
  switch (action.type) {
    case 'TOGGLE_SELECTED':
      return action.athleteId;
    default:
      return state;
  }
};

export default (state = {}, action) => ({
  athletes: athletes(state.athletes, action),
  selectedAthlete: changeSelected(state.selectedAthlete, action),
});
