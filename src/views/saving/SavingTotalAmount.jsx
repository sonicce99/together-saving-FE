import React from "react";
import styled from "styled-components";
import SavingRate from "./SavingRate";

const TotalAmount = () => {
  return (
    <>
      <AmountContainer>
        <AmountInfoContainer>
          <InfoThumbnail />
          <p>
            <span>김보미</span>님의 누적 저축 금액
          </p>
          <p>6,000원</p>
        </AmountInfoContainer>
        <SavingRate />
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

  p:first-of-type {
    color: ${({ theme }) => theme.colors.colorDarkGray1};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    margin-bottom: 12px;
  }

  span {
    color: ${({ theme }) => theme.colors.colorBlue2};
  }

  p:last-child {
    color: ${({ theme }) => theme.colors.colorBlack};
    font-size: ${({ theme }) => theme.fontSize.fontXLarge};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    margin-bottom: 30px;
  }
`;

const InfoThumbnail = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: wheat;
  margin-bottom: 20px;
`;

export default TotalAmount;
