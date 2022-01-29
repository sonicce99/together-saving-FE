import React from "react";
import SavingRoomInfo from "../../views/saving/SavingRoomInfo";
import { useSelector } from "react-redux";

const SavingRoomInfoContainer = () => {
  const challengeInfo = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  if (challengeInfo.loading) return <div>로딩중</div>;
  if (challengeInfo.error) return <div>에러 발생</div>;
  if (!challengeInfo.data) return null;

  return <SavingRoomInfo challengeInfo={challengeInfo.data.data} />;
};

export default SavingRoomInfoContainer;
