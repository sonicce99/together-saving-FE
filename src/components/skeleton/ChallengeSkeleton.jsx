import React from "react";
import styled from "styled-components";
import { Skeleton } from "@mui/material";

const ChallengeSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton variant="rectangle" width={375} height={270} />
      <InfoContainer>
        <Skeleton variant="text" height={30} />
        <Skeleton variant="text" width={200} height={50} />
      </InfoContainer>
      <InfoContainer>
        <Skeleton variant="rectangle" height={100} />
      </InfoContainer>
      <InfoContainer>
        <Skeleton variant="text" height={30} />
        <Skeleton variant="text" width={200} height={50} />
        <Skeleton variant="text" width={300} height={40} />
      </InfoContainer>
    </SkeletonContainer>
  );
};

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  padding: 10px;
`;

export default ChallengeSkeleton;
