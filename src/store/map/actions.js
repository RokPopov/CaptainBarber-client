import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const FETCHED_BARBERSHOPS_LOCATIONS = "FETCHED_BARBERSHOPS_MAP";

const fetchedBarbershopsLocations = (barbershops) => ({
  type: FETCHED_BARBERSHOPS_LOCATIONS,
  payload: barbershops,
});

export const fetchBarbershopsLocations = () => {
  return async (dispatch, getState) => {
    const locations = getState().map.locations.length;
    const response = await Axios.get(`${apiUrl}/map?offset=${locations}`);
    dispatch(fetchedBarbershopsLocations(response.data));
  };
};
