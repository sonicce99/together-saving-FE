import React from "react";
import styled from "styled-components";

const SavingHistoryItem = () => {
  return (
    <>
      <HistoryItem>
        <HistoryDate>01.07 금요일</HistoryDate>
        <HistoryPrice>6,000원</HistoryPrice>
      </HistoryItem>
      <HistoryItem>
        <HistoryDate>01.07 금요일</HistoryDate>
        <HistoryPrice>6,000원</HistoryPrice>
      </HistoryItem>
      <HistoryItem>
        <HistoryDate>01.07 금요일</HistoryDate>
        <HistoryPrice>6,000원</HistoryPrice>
      </HistoryItem>
      <HistoryItem>
        <HistoryDate>01.07 금요일</HistoryDate>
        <HistoryPrice>6,000원</HistoryPrice>
      </HistoryItem>
      <HistoryItem>
        <HistoryDate>01.07 금요일</HistoryDate>
        <HistoryPrice>6,000원</HistoryPrice>
      </HistoryItem>
      <HistoryItem>
        <HistoryDate>01.07 금요일</HistoryDate>
        <HistoryPrice>6,000원</HistoryPrice>
      </HistoryItem>
    </>
  );
};

const HistoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
`;

const HistoryDate = styled(Text)`
  color: ${({ theme }) => theme.colors.colorLightGray1};
`;

const HistoryPrice = styled(Text)`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
`;

export default SavingHistoryItem;
