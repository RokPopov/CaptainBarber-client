import { FETCHED_BARBERSHOP_DETAILS } from "./actions";
import { UPDATED_BARBERSHOP_LIKES } from "./actions";
import { POSTED_REVIEW } from "./actions";

const initialState = {
  locations: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_BARBERSHOP_DETAILS:
      return payload;

    case UPDATED_BARBERSHOP_LIKES:
      return {
        ...state,
        ...payload,
      };

    case POSTED_REVIEW:
      return {
        ...state,
        locations: [...state.bids, [...payload]],
      };

    default:
      return state;
  }
};
