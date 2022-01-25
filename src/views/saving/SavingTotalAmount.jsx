import React, { useEffect } from "react";
import styled from "styled-components";
import SavingCount from "./SavingCount";
import SavingRate from "./SavingRate";

const SavingTotalAmount = ({ savingInfo, endDate }) => {
  const {
    nickname,
    profile_picture,
    cma_balance,
    saving_rate,
    saving_success,
    saving_fail,
    saving_remain,
  } = savingInfo.data;

  return (
    <>
      <AmountContainer>
        <AmountInfoContainer>
          <InfoThumbnail />
          <Text>
            <Span>{nickname}</Span>님의 누적 저축 금액
          </Text>
          <Text>
            {cma_balance &&
              cma_balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </Text>
        </AmountInfoContainer>
        <SavingRate rate={saving_rate} endDate={endDate} />
        <SavingCount
          success={saving_success}
          fail={saving_fail}
          remain={saving_remain}
        />
      </AmountContainer>
    </>
  );
};

const AmountContainer = styled.div`
  padding: 30px 16px;
`;

const AmountInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoThumbnail = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: wheat;
  margin-bottom: 20px;
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

export default SavingTotalAmount;
