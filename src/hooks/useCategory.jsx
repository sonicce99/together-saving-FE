import React, { useEffect, useState } from "react";

const useCategory = (challengeCategory) => {
  const [category, setCategory] = useState("");

  const getCategory = () => {
    switch (challengeCategory) {
      case "participate":
        const join = "참여중인 챌린지";
        setCategory(join);
        break;
      case "popular":
        const popluar = "인기 챌린지";
        setCategory(popluar);
        break;
      case "deadline":
        const deadline = "마감 임박 챌린지";
        setCategory(deadline);
        break;
      case "all":
        const all = "전체 챌린지";
        setCategory(all);
        break;
      default:
        throw Error;
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return category;
};

export default useCategory;
