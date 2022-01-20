import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const PRICE = 6000;
const defaultPrice = PRICE / 1000;

const DepositView = () => {
  const [isUnder, setIsUnder] = useState(false);

  const handleInputPrice = (e) => {
    if (e.target.value === "") return;

    const inputPrice = e.target.value;
    if (inputPrice < defaultPrice) {
      setIsUnder(true);
    }
  };

  return (
    <>
      <DepositViewContainer>
        <DepositAccount>
          <Text>
            <Span>내 신한은행(CMA) 계좌</Span>로
          </Text>
          <Text>1101-7889-128-05</Text>
        </DepositAccount>
        <Input
          placeholder={`${PRICE}원 입력하세요`}
          onChange={handleInputPrice}
        />
        {isUnder && (
          <WarningLabel>
            <Text>
              {defaultPrice}천원 보다 적게 저축하면 달성률이 떨어질 수 있어요
            </Text>
          </WarningLabel>
        )}
      </DepositViewContainer>
      <DepositButtonContainer>
        <Button>저축하기</Button>
      </DepositButtonContainer>
    </>
  );
};

const DepositViewContainer = styled.div`
  padding: 64px 16px 0;
`;

const DepositAccount = styled.div`
  margin-bottom: 46px;
`;

const Text = styled.p`
  &:nth-child(1) {
    margin-bottom: 8px;
  }

  &:nth-child(2) {
    color: ${({ theme }) => theme.colors.colorLightGray1};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.colorDarkGary1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
`;

const Input = styled.input`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontXLarge};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  margin-bottom: 18px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.colorLightGray1};
  }
`;

const WarningLabel = styled.div`
  height: 28px;
  border-radius: 6px;
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.colors.colorLightGray2};

  ${Text}:nth-child(1) {
    color: ${({ theme }) => theme.colors.colorBlue2};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    line-height: 16px;
  }
`;

const DepositButtonContainer = styled.div`
  padding: 8px 16px 34px;
  position: absolute;
  bottom: 0;
`;

export default DepositView;
