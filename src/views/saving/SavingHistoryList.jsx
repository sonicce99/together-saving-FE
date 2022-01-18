import React from "react";
import styled from "styled-components";
import SavingHistoryItem from "./SavingHistoryItem";

const SavingHistory = () => {
  return (
    <>
      <TitleContainer>
        <Title>저축 내역</Title>
        <SubTitleContainer>
          <SubTitle>최근 1주일</SubTitle>
          <SubTitle>최근 저축순</SubTitle>
        </SubTitleContainer>
      </TitleContainer>
      <HistoryContainer>
        <SavingHistoryItem />
      </HistoryContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.colorLightGray1};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};

  &:last-child {
    margin-left: 8px;
  }
`;

const HistoryContainer = styled.ul`
  margin-bottom: 56px;
`;

export default SavingHistory;
