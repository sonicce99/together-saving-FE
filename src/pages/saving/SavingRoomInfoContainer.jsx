import React, { useEffect } from "react";
import styled from "styled-components";
import SavingRoomInfo from "../../views/saving/SavingRoomInfo";
import { useSelector, useDispatch } from "react-redux";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer.js";
import { Skeleton } from "@mui/material";

const SavingRoomInfoContainer = ({ id }) => {
  const dispatch = useDispatch();
  const challengeInfo = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  useEffect(() => {
    dispatch(getChallengesummaryInfo(id));
  }, []);

  if (challengeInfo.loading) {
    return (
      <SkeletonContainer>
        <Skeleton variant="rectangle" width={92} height={70} />
        <SkeletonTextContainer>
          <Skeleton variant="text" width={230} height={40} />
          <Skeleton variant="text" width={230} height={40} />
        </SkeletonTextContainer>
      </SkeletonContainer>
    );
  }

  if (challengeInfo.error) return <div>에러 발생</div>;
  if (!challengeInfo.data) return null;

  return <SavingRoomInfo challengeInfo={challengeInfo.data.data} />;
};

const SkeletonContainer = styled.div`
  height: 97px;
  padding: 14px 16px;
  display: flex;
`;

const SkeletonTextContainer = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default SavingRoomInfoContainer;
