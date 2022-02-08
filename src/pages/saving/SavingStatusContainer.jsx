import React, { useEffect } from "react";
import SavingStatusInfo from "../../views/saving/SavingStatusInfo";
import { useSelector, useDispatch } from "react-redux";
import { getSavingInfo } from "../../redux/reducers/savingInfoReducer";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer";
import SavingStatusSkeleton from "../../components/skeleton/SavingStatusSkeleton";

const SavingStatusContainer = ({ id }) => {
  const statusInfo = useSelector((state) => state.savingInfoReducer.savingInfo);
  const challenge = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavingInfo(id));
    dispatch(getChallengesummaryInfo(id));
  }, []);

  if (statusInfo.loading) return <SavingStatusSkeleton />;
  if (statusInfo.error) return <div>에러 발생</div>;
  if (!statusInfo.data) return null;
  if (!challenge.data) return null;

  return (
    <SavingStatusInfo
      savingStatus={statusInfo.data}
      challengeInfo={challenge.data}
    />
  );
};

export default SavingStatusContainer;
