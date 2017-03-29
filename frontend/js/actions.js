export const addAthlete = athlete => Object.assign(athlete, {
  type: 'ADD_ATHLETE',
});

export const toggleSelected = athleteId => ({
  type: 'TOGGLE_SELECTED',
  athleteId,
});

export const addPoints = (points, id) => ({
  type: 'ADD_POINTS',
  points,
  id,
});
