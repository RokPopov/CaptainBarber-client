import { FETCHED_BARBERSHOP_DETAILS } from "./actions";
import { UPDATED_BARBERSHOP_LIKES } from "./actions";

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

    default:
      return state;
  }
};
