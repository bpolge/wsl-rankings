
const athlete = (state, action) => {
  switch (action.type) {
    case 'ADD_ATHLETE':
      return {
        id: action.id,
        name: action.name,
        rank: action.rank,
        imgSrc: action.imgSrc,
      };
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
    default:
      return state;
  }
};

export default (state = {}, action) => ({
  athletes: athletes(state.athletes, action),
});
