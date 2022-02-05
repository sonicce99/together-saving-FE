import { axiosInstance } from "../../utils/TokenApi";
import {
  GET_SAVING_ACCOUNT_PENDING,
  GET_SAVING_ACCOUNT_SUCCESS,
  GET_SAVING_ACCOUNT_FAIL,
} from "../actions/types";

const getAPI = (id, period, order) => {
  return axiosInstance.get(
    `/api/v1/users/challenges/${id}/saving-histories?period=${period}&ordering=${order}`
  );
};

export const getSavingHistory = (id, period, order) => async (dispatch) => {
  dispatch({ type: GET_SAVING_ACCOUNT_PENDING });

  try {
    const { data } = await getAPI(id, period, order);
    dispatch({
      type: GET_SAVING_ACCOUNT_SUCCESS,
      data,
    });
  } catch (error) {
    dispatch({
      type: GET_SAVING_ACCOUNT_FAIL,
      error,
    });
  }
};

const initialState = {
  savingHistory: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function savingHistory(state = initialState, action) {
  switch (action.type) {
    case GET_SAVING_ACCOUNT_PENDING:
      return {
        ...state,
        savingHistory: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_SAVING_ACCOUNT_SUCCESS:
      return {
        ...state,
        savingHistory: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_SAVING_ACCOUNT_FAIL:
      return {
        ...state,
        savingHistory: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
