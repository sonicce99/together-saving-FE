import React, { useEffect } from "react";
import SavingRoomInfo from "../../views/saving/SavingRoomInfo";
import { useSelector, useDispatch } from "react-redux";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer.js";
import SavingRoomInfoSkeleton from "../../components/skeleton/SavingRoomInfoSkeleton";

const SavingRoomInfoContainer = ({ id }) => {
  const dispatch = useDispatch();
  const challengeInfo = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  useEffect(() => {
    dispatch(getChallengesummaryInfo(id));
  }, []);

  if (challengeInfo.loading) return <SavingRoomInfoSkeleton />;
  if (challengeInfo.error) return <div>에러 발생</div>;
  if (!challengeInfo.data) return null;

  return <SavingRoomInfo challengeInfo={challengeInfo.data.data} />;
};

export default SavingRoomInfoContainer;
