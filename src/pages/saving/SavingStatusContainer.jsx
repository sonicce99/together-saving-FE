import React, { useEffect } from "react";
import styled from "styled-components";
import SavingStatusInfo from "../../views/saving/SavingStatusInfo";
import { useSelector, useDispatch } from "react-redux";
import { getSavingInfo } from "../../redux/reducers/savingInfoReducer";
import { getChallengesummaryInfo } from "../../redux/reducers/challengeSummaryReducer";
import { Skeleton } from "@mui/material";

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

  if (statusInfo.loading) {
    return (
      <SkeletonContainer>
        <Skeleton variant="circular" width={100} height={100} />
        <Skeleton width="60%" height={60} />
        <Skeleton width="100%" />
        <Skeleton variant="rectangle" width="100%" height={100} />
      </SkeletonContainer>
    );
  }

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

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    margin-bottom: 20px;
  }

  &:nth-child(2) {
    margin-bottom: 42px;
  }

  &:nth-child(2) {
    margin-bottom: 60px;
  }
`;

export default SavingStatusContainer;
