import React from "react";
import styled from "styled-components";

const SavingRate = ({ rate }) => {
  const endDate = new Date("2022-02-22");
  const today = new Date();
  const remainDay = endDate.getTime() - today.getTime();
  const D_day = Math.ceil(remainDay / (1000 * 60 * 60 * 24));

  return (
    <>
      <Title>저축률</Title>
      <Text>
        만기까지 저축률 100%을 채워보세요!
        <br />
        100% 달성 시 상금을 획득할 수 있어요
      </Text>
      <Day left={rate + "%"}>D-{D_day}</Day>
      <ProgressContainer>
        <Progress width={rate + "%"} />
      </ProgressContainer>
      <RateInfoContainer>
        <Text>현재 {rate}%</Text>
        <Text>달성률 100%</Text>
      </RateInfoContainer>
    </>
  );
};

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  margin-bottom: 12px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontXSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  line-height: 20px;
  margin-bottom: 35px;
  position: relative;
`;

const Day = styled.p`
  width: 42px;
  height: 22px;
  font-size: ${({ theme }) => theme.fontSize.fontXSmall};
  text-align: center;
  color: ${({ theme }) => theme.colors.colorWhite};
  background-color: ${({ theme }) => theme.colors.colorBlue2};
  border-radius: 20px;
  position: absolute;
  top: 465px;
  left: ${(props) => props.left};
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

  ${Text}:nth-child(1) {
    color: ${({ theme }) => theme.colors.colorBlue2};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    margin-bottom: 0;
  }

  ${Text}:nth-child(2) {
    color: ${({ theme }) => theme.colors.colorGray3};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    margin-bottom: 0;
  }
`;

export default SavingRate;
