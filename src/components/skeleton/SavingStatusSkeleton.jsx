import React from "react";
import styled from "styled-components";
import { Skeleton } from "@mui/material";

const SavingStatusSkeleton = () => {
  return (
    <SkeletonContainer>
      <StatusInfoContainer>
        <Skeleton variant="circular" width={100} height={100} />
        <Skeleton variant="text" width="100%" height={100} />
        <Skeleton variant="rectangle" width="100%" height={230} />
      </StatusInfoContainer>
    </SkeletonContainer>
  );
};

const SkeletonContainer = styled.div`
  padding: 30px 16px;
`;

const StatusInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SavingStatusSkeleton;
