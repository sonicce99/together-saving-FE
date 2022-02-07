import React from "react";

const useRemainWeek = (startDate, endDate) => {
  const weekOfStart = new Date(startDate);
  const weekOfEnd = new Date(endDate);
  const remainTime = weekOfEnd.getTime() - weekOfStart.getTime();
  const remainWeek = Math.ceil(remainTime / (1000 * 60 * 60 * 30 * 5));

  return remainWeek;
};

export default useRemainWeek;
