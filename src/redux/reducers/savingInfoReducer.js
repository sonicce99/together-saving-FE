import { axiosInstance } from "../../utils/TokenApi";

import {
  GET_SAVING_INFO_PENDING,
  GET_SAVING_INFO_SUCCESS,
  GET_SAVING_INFO_FAIL,
} from "../actions/types";

const getAPI = (id) => {
  return axiosInstance.get(`/api/v1/users/challenges/${id}/saving-detail`);
};

export const getSavingInfo = (id) => async (dispatch) => {
  dispatch({ type: GET_SAVING_INFO_PENDING });

  try {
    const { data } = await getAPI(id);
    dispatch({
      type: GET_SAVING_INFO_SUCCESS,
      data: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SAVING_INFO_FAIL,
      error,
    });
  }
};

const initialState = {
  savingInfo: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function savingInfo(state = initialState, action) {
  switch (action.type) {
    case GET_SAVING_INFO_PENDING:
      return {
        ...state,
        savingInfo: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_SAVING_INFO_SUCCESS:
      return {
        ...state,
        savingInfo: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_SAVING_INFO_FAIL:
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
