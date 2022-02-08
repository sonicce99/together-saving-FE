import React from "react";
import styled from "styled-components";
import SavingCount from "./SavingCount";
import SavingRate from "./SavingRate";
import useNumberComma from "../../hooks/useNumberComma";
import defaultImage from "../../images/Character.png";

const SavingStatusInfo = ({ savingStatus, challengeInfo }) => {
  const {
    thumbnail,
    nickname,
    accumualted_amount,
    saving_rate,
    success_count,
    failure_count,
    remain_count,
  } = savingStatus.data;

  const { end_date } = challengeInfo.data;

  const cmaBalance = useNumberComma(accumualted_amount);

  const handleImageError = (e) => {
    e.target.src = defaultProfile;
  };

  return (
    <>
      <SavingStatusContainer>
        <StatusInfoContainer>
          <InfoThumbnail
            src={thumbnail ? thumbnail : defaultImage}
            alt="thumbnail"
            onError={handleImageError}
          />
          <Text>
            <Span>{nickname}</Span>님의 누적 저축 금액
          </Text>
          <Text>{cmaBalance}원</Text>
        </StatusInfoContainer>
        <SavingRate rate={saving_rate} endDate={end_date} />
        <SavingCount
          success={success_count}
          fail={failure_count}
          remain={remain_count}
        />
      </SavingStatusContainer>
    </>
  );
};

const SavingStatusContainer = styled.div`
  padding: 30px 16px;
`;

const StatusInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoThumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: skyblue;
  display: block;
  margin: 0 auto 20px;
`;

const Text = styled.p`
  &:first-of-type {
    color: ${({ theme }) => theme.colors.colorDarkGray1};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    margin-bottom: 12px;
  }

  &:last-child {
    color: ${({ theme }) => theme.colors.colorBlack};
    font-size: ${({ theme }) => theme.fontSize.fontXLarge};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    margin-bottom: 30px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.colorBlue2};
`;

export default SavingStatusInfo;
