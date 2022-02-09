import React from "react";
import { useSelector } from "react-redux";
import SavingCommunication from "../../views/saving/SavingCommunication";

const SavingCommunicationContainer = () => {
  // 챌린지 정보 가져오기
  const challengeInfo = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  return (
    <SavingCommunication challenge_id={challengeInfo.data.data.challenge_id} />
  );
};

export default SavingCommunicationContainer;
