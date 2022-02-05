import { axiosInstance } from "./TokenApi";

// 챌린지 네임에 따라 다른 응답 보내주기
// utils 안에 몰아넣는 것이 좋지 않다. => 커스텀 훅으로 빼는 것이 좋다. 역할이 명확해지기 때문이다.
// utils라는 것이 의미가 애매하다.
export const connectChallengeApi = async (challengeName, dataPage) => {
  try {
    switch (challengeName) {
      case "participate":
        const participateData = await axiosInstance.get(
          `/api/v1/users/my-challenges?page=${dataPage}`
        );
        return participateData.data;
      case "popular":
        const popularData = await axiosInstance.get(
          `/api/v1/auth/challenges?criteria=popularity&page=${dataPage}`
        );
        return popularData.data;
      case "deadline":
        const deadLineData = await axiosInstance.get(
          `/api/v1/auth/challenges?criteria=deadline&page=${dataPage}`
        );
        return deadLineData.data;
      case "all":
        const allData = await axiosInstance.get(
          `/api/v1/auth/challenges?criteria=valid&page=${dataPage}`
        );
        return allData.data;
      default:
        throw Error;
    }
  } catch (error) {
    throw Error;
  }
};
