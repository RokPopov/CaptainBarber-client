import { apiUrl } from "../../config/constants";
import Axios from "axios";

import { showMessageWithTimeout, appDoneLoading } from "../appState/actions";
import { selectUser } from "../user/selectors";

export const FETCHED_BARBERSHOP_DETAILS = "FETCHED_BARBERSHOP_DETAILS";
export const UPDATED_BARBERSHOP_LIKES = "UPDATED_BARBERSHOP_LIKES";
export const POSTED_REVIEW = "POSTED_REVIEW";

export const fetchedBarbershopDetails = (barbershopDetails) => ({
  type: FETCHED_BARBERSHOP_DETAILS,
  payload: barbershopDetails,
});

export const fetchBarbershopDetails = (id) => {
  return async (dispatch, getState) => {
    const response = await Axios.get(`${apiUrl}/barbershops/${id}`);
    dispatch(fetchedBarbershopDetails(response.data));
  };
};

export const incrementingLikes = (rate) => ({
  type: UPDATED_BARBERSHOP_LIKES,
  payload: rate,
});

export const incrementLikes = (id) => {
  return async (dispatch, getState) => {
    const response = await Axios.patch(`${apiUrl}/barbershops/${id}`);
    dispatch(incrementingLikes(response.data));
  };
};

export const postingReview = (review) => {
  return {
    type: POSTED_REVIEW,
    payload: review,
  };
};

export const postReview = (content, id) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    const state = getState();

    const response = await Axios.post(
      `${apiUrl}/barbershops/${id}/review`,
      {
        time: new Date(),
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(
      showMessageWithTimeout(
        "success",
        false,
        "You have been successful!",
        3000
      )
    );

    dispatch(appDoneLoading());
  };
};
