import React from "react";
import { useSelector } from "react-redux";
import SavingLanking from "../../views/saving/SavingLanking";

const SavingLankingContainer = () => {
  // const dispatch = useDispatch();
  const challengeInfo = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  if (challengeInfo.loading) return <div>로딩중</div>;
  if (challengeInfo.error) return <div>에러 발생</div>;
  if (!challengeInfo.data) return null;

  return (
    <SavingLanking challenge_name={challengeInfo.data.data.challenge_name} />
  );
};

export default SavingLankingContainer;
