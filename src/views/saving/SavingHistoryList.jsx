import React from "react";
import styled from "styled-components";
import SavingHistoryItem from "./SavingHistoryItem";

const SavingHistory = () => {
  return (
    <>
      <TitleContainer>
        <Title>저축 내역</Title>
        <HistoryButtonContainer>
          <HistoryButton>최근 1주일</HistoryButton>
          <HistoryButton>최근 저축순</HistoryButton>
        </HistoryButtonContainer>
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

const HistoryButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
`;

const HistoryButton = styled.button`
  color: ${({ theme }) => theme.colors.colorLightGray1};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};

  &:last-child {
    margin-left: 8px;
  }
`;

const HistoryContainer = styled.ul`
  height: 97px;
  margin-bottom: 56px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;

export default SavingHistory;
