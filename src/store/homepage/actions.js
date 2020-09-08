import { apiUrl } from "../../config/constants";
import Axios from "axios";

const pagination_limit = 25;
export const FETCHED_BARBERSHOPS = "FETCHED_BARBERSHOPS";

const fetchedBarbershops = (barbershops) => ({
  type: FETCHED_BARBERSHOPS,
  payload: barbershops,
});

export const fetchBarbershops = () => {
  return async (dispatch, getState) => {
    const barbershops = getState().barbershops.length;
    const response = await Axios.get(
      `${apiUrl}/barbershops?limit=${pagination_limit}&&offset=${barbershops}`
    );
    console.log("fetch barbershops response", response);
    dispatch(fetchedBarbershops(response.data));
  };
};
