import React, { useEffect } from "react";
import SavingHistory from "../../views/saving/SavingHistory";
import { useSelector, useDispatch } from "react-redux";
import { getSavingHistory } from "../../redux/reducers/savingHistoryReducer";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer";

const SavingHistoryContainer = ({ id }) => {
  const challenge = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );
  const history = useSelector(
    (state) => state.savingHistoryReducer.savingHistory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavingHistory(id));
    dispatch(getChallengesummaryInfo(id));
  }, []);

  if (history.loading) return <div>로딩중</div>;
  if (history.error) return <div>에러 발생</div>;
  if (!history.data) return null;
  if (!challenge.data) return null;

  return (
    <SavingHistory
      savingHistory={history.data}
      challengeInfo={challenge.data}
      id={id}
    />
  );
};

export default SavingHistoryContainer;
