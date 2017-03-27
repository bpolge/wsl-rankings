const addPoints = points => ({
  type: 'ADD_POINTS',
  points,
});

const addAthlete = athlete => Object.assign(athlete, {
  type: 'ADD_ATHLETE',
});

export { addPoints, addAthlete };
