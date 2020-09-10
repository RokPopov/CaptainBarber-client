import { FETCHED_BARBERSHOPS } from "./actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_BARBERSHOPS:
      return [...state, ...payload];

    default:
      return state;
  }
};
