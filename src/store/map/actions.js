import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const FETCHED_BARBERSHOPS_LOCATIONS = "FETCHED_BARBERSHOPS_MAP";

const fetchedBarbershopsLocations = (barbershops) => ({
  type: FETCHED_BARBERSHOPS_LOCATIONS,
  payload: barbershops,
});

export const fetchBarbershopsLocations = () => {
  return async (dispatch, getState) => {
    const barbershops = getState().barbershops.length;
    const response = await Axios.get(`${apiUrl}/map?offset=${barbershops}`);
    console.log("give me response", response);
    dispatch(fetchedBarbershopsLocations(response.data));
  };
};
