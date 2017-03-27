
const athlete = (state, action) => {
  switch (action.type) {
    case 'ADD_ATHLETE':
      return {
        id: action.id,
        name: action.name,
        rank: action.rank,
        imgSrc: action.imgSrc,
      };
    case 'ADD_POINTS':
      let points = state.points || 0;
      points += 1000;
      return Object.assign({}, state, { points });
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
      return state.map((item, idx) => {
        if (idx === action.points) {
          return athlete(item, action);
        }
        return Object.assign({}, item);
      });
    default:
      return state;
  }
};

export default (state = {}, action) => ({
  athletes: athletes(state.athletes, action),
});
