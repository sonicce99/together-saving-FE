import React, { useState, useEffect } from "react";
import { axiosInstance } from "../utils/TokenApi";

const useChallengeApi = (challengeName, nextPage) => {
  const [challengeData, setChallengeData] = useState([]);
  const [isSubscribe, setIsSubscribe] = useState(true);

  const getCallApi = () => {
    switch (challengeName) {
      case "participate":
        axiosInstance
          .get(`/api/v1/users/my-challenges?page=${nextPage}`)
          .then((res) => {
            setChallengeData([...challengeData, ...res.data.data]);
          });
        break;
      case "popular":
        axiosInstance
          .get(`/api/v1/auth/challenges?criteria=popularity&page=${nextPage}`)
          .then((res) => {
            setChallengeData([...challengeData, ...res.data.data]);
          });
        break;
      case "deadline":
        axiosInstance
          .get(`/api/v1/auth/challenges?criteria=deadline&page=${nextPage}`)
          .then((res) => {
            setChallengeData([...challengeData, ...res.data.data]);
          });
        break;
      case "all":
        axiosInstance
          .get(`/api/v1/auth/challenges?criteria=valid&page=${nextPage}`)
          .then((res) => {
            setChallengeData([...challengeData, ...res.data.data]);
          });
        break;
      default:
        throw Error;
    }
  };

  useEffect(() => {
    isSubscribe && getCallApi();
    return () => setIsSubscribe((isSubscribe) => !isSubscribe);
  }, [nextPage]);

  return challengeData;
};

export default useChallengeApi;
