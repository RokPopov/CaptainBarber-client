import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const FETCHED_BARBERSHOP_DETAILS = "FETCHED_BARBERSHOP_DETAILS";
export const UPDATED_BARBERSHOP_LIKES = "UPDATED_BARBERSHOP_LIKES";

export const fetchedBarbershopDetails = (barbershopDetails) => ({
  type: FETCHED_BARBERSHOP_DETAILS,
  payload: barbershopDetails,
});

export const fetchBarbershopDetails = (id) => {
  return async (dispatch, getState) => {
    const response = await Axios.get(`${apiUrl}/barbershops/${id}`);
    dispatch(fetchedBarbershopDetails(response.data));
    console.log("what is response", response.data);
  };
};

export const incrementingLikes = (rate) => ({
  type: UPDATED_BARBERSHOP_LIKES,
  payload: rate,
});

export const incrementLikes = (id) => {
  return async (dispatch, getState) => {
    const response = await Axios.patch(`${apiUrl}/barbershops/${id}`);
    console.log("what is", response.data);
    dispatch(incrementingLikes(response.data));
  };
};
