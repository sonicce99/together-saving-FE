import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Keypad from "./Keypad";

const DepositView = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowKeypad = () => {
    setIsShow(true);
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
        <Input placeholder="6000원 입력하세요" onClick={handleShowKeypad} />
      </DepositViewContainer>
      <KeypadContainer>
        <Keypad />
      </KeypadContainer>

      <DepositButtonContainer>
        <Button>저축하기</Button>
      </DepositButtonContainer>
    </>
  );
};

const DepositViewContainer = styled.div`
  padding: 64px 16px;
`;

const DepositAccount = styled.div`
  margin-bottom: 46px;
`;

const Text = styled.p`
  &:first-of-type {
    margin-bottom: 8px;
  }

  &:last-child {
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
  margin-bottom: 146px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.colorLightGray1};
  }
`;

const DepositButtonContainer = styled.div`
  padding: 8px 16px 34px;
  position: absolute;
  bottom: 0;
`;

const KeypadContainer = styled.div`
  padding: 8px 16px 0;
  position: relative;
  bottom: -13px;
  box-shadow: inset 0px 1px 0px #e3e7ed;
`;

export default DepositView;
