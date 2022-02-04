import axios from "axios";

// 챌린지 네임에 따라 다른 응답 보내주기
export const connectChallengeApi = async (challengeName, dataPage) => {
  try {
    switch (challengeName) {
      case "participate": // 참여 중 (토큰 필요)
        const participateData = await axios.get(
          "../../modules/participatingChallenge.json"
        );
        return participateData.data;
      case "popular": // 인기 더보기
        const popularData = await axios.get(
          `${process.env.API_ADDRESS}/api/v1/auth/challenges?criteria=popularity&page=${dataPage}`
        );
        return popularData.data;
      default:
        throw Error;
    }
  } catch (error) {
    throw Error;
  }
};
