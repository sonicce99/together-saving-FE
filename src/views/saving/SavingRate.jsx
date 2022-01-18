import React from "react";
import styled, { keyframes } from "styled-components";
import SavingCount from "./SavingCount";

const SavingRate = () => {
  return (
    <RateContainer>
      <p>저축률</p>
      <p>
        만기까지 저축률 100%을 채워보세요!
        <br />
        100% 달성 시 상금을 획득할 수 있어요
      </p>
      <ProgressContainer>
        <Progress width={35 + "%"} />
      </ProgressContainer>
      <RateInfoContainer>
        <p>현재 35%</p>
        <p>달성률 100%</p>
      </RateInfoContainer>
      <SavingCount />
    </RateContainer>
  );
};

const RateContainer = styled.div`
  p:nth-child(1) {
    color: ${({ theme }) => theme.colors.colorDarkGray1};
    font-size: ${({ theme }) => theme.fontSize.fontSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightBold};
    margin-bottom: 12px;
  }

  p:nth-child(2) {
    color: ${({ theme }) => theme.colors.colorDarkGray1};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    line-height: 20px;
    margin-bottom: 25px;
  }
`;

const ProgressBar = styled.div`
  height: 8px;
  border-radius: 5px;
`;

const ProgressContainer = styled(ProgressBar)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.colorGray2};
  margin-bottom: 12px;
`;

const Progress = styled(ProgressBar)`
  width: ${(props) => props.width};
  background-color: ${({ theme }) => theme.colors.colorBlue2};
  animation: progressRate 1s ease-out;

  @keyframes progressRate {
    0% {
      width: 0%;
    }
    100% {
      width: ${(props) => props.width};
    }
  }
`;

const RateInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  p:nth-child(1) {
    color: ${({ theme }) => theme.colors.colorBlue2};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    margin-bottom: 0;
  }

  p:nth-child(2) {
    color: ${({ theme }) => theme.colors.colorGray3};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    margin-bottom: 0;
  }
`;

export default SavingRate;
