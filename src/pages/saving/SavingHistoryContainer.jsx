import React, { useEffect, useState } from "react";
import SavingHistory from "../../views/saving/SavingHistory";
import { useSelector, useDispatch } from "react-redux";
import { getSavingInfo } from "../../redux/reducers/savingInfoReducer";
import { getSavingHistory } from "../../redux/reducers/savingHistoryReducer";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer";
import SavingHistorySkeleton from "../../components/skeleton/SavingHistorySkeleton";

const SavingHistoryContainer = ({ id }) => {
  const [filter, setFilter] = useState({ period: "today", order: "desc" });

  const status = useSelector((state) => state.savingInfoReducer.savingInfo);
  const history = useSelector(
    (state) => state.savingHistoryReducer.savingHistory
  );
  const challenge = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavingHistory(id, filter.period, filter.order));
    dispatch(getChallengesummaryInfo(id));
    dispatch(getSavingInfo(id));
  }, [filter]);

  if (history.loading) return <SavingHistorySkeleton />;
  if (history.error) return <div>에러 발생</div>;
  if (!history.data) return null;
  if (!challenge.data) return null;
  if (!status.data) return null;

  const handleFilter = (period, order) => {
    setFilter({
      ...filter,
      period,
      order,
    });
  };

  return (
    <SavingHistory
      savingHistory={history.data}
      challengeInfo={challenge.data}
      statusInfo={status.data}
      filter={filter}
      onFilter={handleFilter}
      id={id}
    />
  );
};

export default SavingHistoryContainer;
