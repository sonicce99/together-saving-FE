import React, { useState } from "react";
import styled from "styled-components";

const SavingHistoryItem = ({ historyItem }) => {
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const { date, amount } = historyItem;

  const displayDate = date.slice(5, 15).replace("-", ".");

  return (
    <>
      <HistoryItem>
        <HistoryDate>
          {displayDate} {week[new Date(date).getDay()]}
        </HistoryDate>
        <HistoryPrice>
          {amount && amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </HistoryPrice>
      </HistoryItem>
    </>
  );
};

const HistoryItem = styled.li`
  height: 23px;
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
