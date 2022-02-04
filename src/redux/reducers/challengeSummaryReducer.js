import axios from "axios";
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from "../actions/types";

const getAPI = (id) => {
  return axios.get(`http://183.99.247.17:8881/api/v1/auth/challenges/${id}`); // 1번으로 하드코딩 되어 있는 부분 ${id} 로 수정하기
};

export const getChallengesummaryInfo = (id) => async (dispatch) => {
  dispatch({ type: GET_POSTS }); // 요청이 시작됨
  try {
    const { data } = await getAPI(id); // API 호출
    dispatch({ type: GET_POSTS_SUCCESS, data }); // 성공
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e }); // 실패
  }
};

const initialState = {
  challengeSummaryInfo: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function challengeSummaryInfo(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        challengeSummaryInfo: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        challengeSummaryInfo: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        challengeSummaryInfo: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
