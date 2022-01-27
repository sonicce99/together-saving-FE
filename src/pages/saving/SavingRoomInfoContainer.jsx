import React from "react";
import SavingRoomInfo from "../../views/saving/SavingRoomInfo";
import { useSelector } from "react-redux";

const SavingRoomInfoContainer = () => {
  const challenge = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  if (challenge.loading) return <div>로딩중</div>;
  if (challenge.error) return <div>에러 발생</div>;
  if (!challenge.data) return null;

  return <SavingRoomInfo challengeData={challenge.data.data} />;
};

export default SavingRoomInfoContainer;
