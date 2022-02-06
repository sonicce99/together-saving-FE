import React from "react";

const useRemainDay = (endDate) => {
  const endDay = new Date(endDate);
  const today = new Date();
  const remainTime = endDay.getTime() - today.getTime();
  const remainDay = Math.ceil(remainTime / (1000 * 60 * 60 * 24));

  return remainDay;
};

export default useRemainDay;
