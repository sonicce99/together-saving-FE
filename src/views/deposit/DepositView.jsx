// import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";

const DepositView = () => {
  const [isUnder, setIsUnder] = useState(false);
  const inputRef = useRef();

  const location = useLocation();
  const { bank, account, price } = location.state;

  const handleSavingSubmit = () => {
    // const savingPrice = inputRef.current.value;
    // axios.post('url', { challenge_payment: savingPrice, physical_account_number: })
  };

  return (
    <>
      <DepositViewContainer>
        <DepositAccount>
          <Text>
            <Span>내 {bank}(CMA) 계좌</Span>로
          </Text>
          <Text>{account}</Text>
        </DepositAccount>
        <Input
          ref={inputRef}
          type="number"
          placeholder={`${
            price && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }원 입력하세요`}
          max="5"
        />
        {isUnder && (
          <WarningLabel>
            <Text>
              {price > 10000 ? `${price / 10000}만원 ` : `${price / 1000}천원 `}
              보다 적게 저축하면 달성률이 떨어질 수 있어요
            </Text>
          </WarningLabel>
        )}
        <ButtonContainer>
          <Button onClick={handleSavingSubmit}>저축하기</Button>
        </ButtonContainer>
      </DepositViewContainer>
    </>
  );
};

const DepositViewContainer = styled.div`
  padding: 40px 16px 0;
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
    width: 300px;
    color: ${({ theme }) => theme.colors.colorBlue2};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    line-height: 16px;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
`;
export default DepositView;
