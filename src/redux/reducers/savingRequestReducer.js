import { axiosInstance } from "../../utils/TokenApi";
import {
  GET_SAVING_REQUEST_PENDING,
  GET_SAVING_REQUEST_SUCCESS,
  GET_SAVING_REQUEST_FAIL,
} from "../actions/types";

const getAPI = (challengeId, savingPrice) => {
  return axiosInstance.post(`/api/v1/users/challenges/${challengeId}/saving`, {
    saving_amount: savingPrice,
  });
};

export const requestSaving = (challengeId, savingPrice) => async (dispatch) => {
  dispatch({ type: GET_SAVING_REQUEST_PENDING });

  try {
    const data = await getAPI(challengeId, savingPrice);
    dispatch({
      type: GET_SAVING_REQUEST_SUCCESS,
      data: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SAVING_REQUEST_FAIL,
      error,
    });
  }
};

const initialState = {
  saving: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function savingInfo(state = initialState, action) {
  switch (action.type) {
    case GET_SAVING_REQUEST_PENDING:
      return {
        ...state,
        savingInfo: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_SAVING_REQUEST_SUCCESS:
      return {
        ...state,
        savingInfo: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_SAVING_REQUEST_FAIL:
      return {
        ...state,
        savingInfo: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
