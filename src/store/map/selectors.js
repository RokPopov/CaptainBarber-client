export const selectLocations = (state) => {
  console.log("state", state);
  return state.map.locations;
};
