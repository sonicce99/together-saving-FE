import React, { useEffect } from "react";
import SavingRoomInfo from "../../views/saving/SavingRoomInfo";
import { useSelector, useDispatch } from "react-redux";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer.js";

const SavingRoomInfoContainer = ({ challengeId }) => {
  const dispatch = useDispatch();
  const challengeInfo = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  useEffect(() => {
    dispatch(getChallengesummaryInfo(challengeId));
  }, []);

  if (challengeInfo.loading) return <div>로딩중</div>;
  if (challengeInfo.error) return <div>에러 발생</div>;
  if (!challengeInfo.data) return null;

  return <SavingRoomInfo challengeInfo={challengeInfo.data.data} />;
};

export default SavingRoomInfoContainer;
