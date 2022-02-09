import React, { useState, useEffect } from "react";
import { axiosInstance } from "../utils/TokenApi";

const useChallengeApi = (challengeName, nextPage) => {
  const [challengeData, setChallengeData] = useState([]);

  const getCallApi = async () => {
    switch (challengeName) {
      case "participate":
        const join = await axiosInstance.get(
          `/api/v1/users/my-challenges?page=${nextPage}`
        );
        setChallengeData([...challengeData, ...join.data.data]);
        break;
      case "popular":
        const popular = await axiosInstance.get(
          `/api/v1/auth/challenges?criteria=popularity&page=${nextPage}`
        );
        setChallengeData([...challengeData, ...popular.data.data]);
        break;
      case "deadline":
        const deadline = await axiosInstance.get(
          `/api/v1/auth/challenges?criteria=deadline&page=${nextPage}`
        );
        setChallengeData([...challengeData, ...deadline.data.data]);
        break;
      case "all":
        const all = await axiosInstance.get(
          `/api/v1/auth/challenges?criteria=valid&page=${nextPage}`
        );
        setChallengeData([...challengeData, ...all.data.data]);
        break;
      default:
        throw Error;
    }
  };

  useEffect(() => {
    getCallApi();
  }, [nextPage]);

  return challengeData;
};

export default useChallengeApi;
