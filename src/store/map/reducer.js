import { FETCHED_BARBERSHOPS_LOCATIONS } from "./actions";

const initialState = {
  locations: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_BARBERSHOPS_LOCATIONS:
      return { ...state, locations: payload };

    default:
      return state;
  }
};
