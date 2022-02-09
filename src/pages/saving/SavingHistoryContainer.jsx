import React, { useEffect } from "react";
import SavingHistory from "../../views/saving/SavingHistory";
import { useSelector, useDispatch } from "react-redux";
import { getSavingInfo } from "../../redux/reducers/savingInfoReducer";
import { getSavingHistory } from "../../redux/reducers/savingHistoryReducer";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer";
import SavingHistorySkeleton from "../../components/skeleton/SavingHistorySkeleton";

const SavingHistoryContainer = ({ id }) => {
  const status = useSelector((state) => state.savingInfoReducer.savingInfo);
  const history = useSelector(
    (state) => state.savingHistoryReducer.savingHistory
  );
  const challenge = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  const dispatch = useDispatch();

  const filter = { period: "today", order: "desc" };

  useEffect(() => {
    dispatch(getSavingHistory(id, filter.period, filter.order));
    dispatch(getChallengesummaryInfo(id));
    dispatch(getSavingInfo(id));
  }, []);

  if (history.loading) return <SavingHistorySkeleton />;
  if (history.error) return <div>에러 발생</div>;
  if (!history.data) return null;
  if (!challenge.data) return null;
  if (!status.data) return null;

  return (
    <SavingHistory
      id={id}
      filter={filter}
      savingHistory={history.data}
      challengeInfo={challenge.data}
      statusInfo={status.data}
    />
  );
};

export default SavingHistoryContainer;
