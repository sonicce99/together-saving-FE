import React, { useEffect } from "react";
import styled from "styled-components";
import DivisionLine from "../../components/DivisionLine";
import SavingTabMenu from "../../views/saving/SavingTabMenu";
import SavingRoomInfo from "../../views/saving/SavingRoomInfo";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer.js";

const SavingMain = () => {
  const challenge = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChallengesummaryInfo());
  }, [dispatch]);

  if (challenge.loading) return <div>로딩중</div>;
  if (challenge.error) return <div>에러 발생</div>;
  if (!challenge.data) return null;

  return (
    <SavingContainer>
      <SavingRoomInfo challengeData={challenge.data.data} />
      <DivisionLine />
      <SavingTabMenu endDate={challenge.data.data.end_date} />
    </SavingContainer>
  );
};

const SavingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SavingMain;
