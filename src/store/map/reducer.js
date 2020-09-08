import { FETCHED_BARBERSHOPS_LOCATIONS } from "./actions";

const initialState = {
  locations: [],
};

export default (oldState = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_BARBERSHOPS_LOCATIONS:
      console.log("locations payload", payload);
      const oldLocations = oldState.locations;
      const mergedLocations = [...oldLocations, ...payload];
      const newState = { ...oldState, locations: mergedLocations };
      return newState;

    default:
      return oldState;
  }
};
