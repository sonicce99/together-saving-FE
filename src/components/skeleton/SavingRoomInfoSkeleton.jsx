import React from "react";
import styled from "styled-components";
import { Skeleton } from "@mui/material";

const SavingRoomInfoSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton variant="rectangle" width={92} height={70} />
      <SkeletonTextContainer>
        <Skeleton variant="text" width={230} height={40} />
        <Skeleton variant="text" width={230} height={40} />
      </SkeletonTextContainer>
    </SkeletonContainer>
  );
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

export default SavingRoomInfoSkeleton;
