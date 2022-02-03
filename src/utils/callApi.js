import axios from "axios";

// env로 빼자
const API_ADDRESS = "http://183.99.247.17:8881/api/v1/users/challenges";

// 챌린지 네임에 따라 다른 응답 보내주기
export const connectChallengeApi = async (challengeName, dataPage) => {
  try {
    switch (challengeName) {
      case "participate":
        const { data } = await axios.get(
          "../../modules/participatingChallenge.json"
        );
        return data.data;
      default:
        throw Error;
    }
  } catch (error) {
    throw Error;
  }
};
