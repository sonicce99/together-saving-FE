import React from "react";
import styled from "styled-components";
import { Skeleton } from "@mui/material";

const SavingHistorySkeleton = () => {
  return (
    <SkeletonContainer>
      <AccountInfoContainer>
        <AccountInfo>
          <Skeleton variant="circular" width={45} height={45} />
          <AccountTextContainer>
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" width={230} />
          </AccountTextContainer>
        </AccountInfo>
      </AccountInfoContainer>
      <TitleContainer>
        <Skeleton variant="text" width="100%" />
      </TitleContainer>
      <Skeleton variant="rectangle" height={100} />
    </SkeletonContainer>
  );
};

const SkeletonContainer = styled.div`
  padding: 30px 16px;
  height: 550px;
`;

const AccountInfoContainer = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.colorLightGray4};
  margin-bottom: 30px;
`;

const AccountInfo = styled.div`
  width: 100%;
  display: flex;
`;

const AccountTextContainer = styled.div`
  flex-grow: 1;
  margin-left: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export default SavingHistorySkeleton;
