import React from "react";
import styled from "styled-components";
import Portal from "../../components/Portal";
import SavingFinishPopUp from "./SavingFinishPopUp";
import { remainDayRegex } from "../../utils/regex";

const SavingRate = ({ rate, endDate }) => {
  const remainDay = remainDayRegex(endDate);

  return (
    <>
      <Title>저축률</Title>
      <Text>
        만기까지 저축률 100%을 채워보세요!
        <br />
        100% 달성 시 상금을 획득할 수 있어요
      </Text>
      <RemainDayContainer>
        <Day left={rate >= 92 ? "87%" : rate < 5 ? "0%" : `${rate - 6}%`}>
          {remainDay === 0
            ? "D-day"
            : remainDay < 0
            ? "Finish"
            : `D-${remainDay}`}
        </Day>
      </RemainDayContainer>
      <ProgressContainer>
        {(remainDay < 0 || rate === "100") && (
          <Portal>
            <SavingFinishPopUp />
          </Portal>
        )}
        <Progress width={`${rate}%`} />
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
  margin-bottom: 30px;

  &:nth-child(3) {
    margin-bottom: 7px;
  }
`;

const RemainDayContainer = styled.div`
  margin-bottom: 7px;
`;

const Day = styled.p`
  width: 50px;
  height: 24px;
  font-size: ${({ theme }) => theme.fontSize.fontXSmall};
  text-align: center;
  color: ${({ theme }) => theme.colors.colorWhite};
  background-color: ${({ theme }) => theme.colors.colorBlue2};
  border-radius: 20px;
  padding: 1px 6px;
  position: relative;
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
