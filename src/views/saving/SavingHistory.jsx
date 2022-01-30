import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AutoSavingButton from "./AutoSavingButton";
import SavingHistoryList from "./SavingHistoryList";
import SavingStartButton from "./SavingStartButton";
import { useSelector } from "react-redux";
import { stringRegexWithComma } from "../../utils/regex";

const SavingHistory = ({ savingHistory }) => {
  const { challenge_payment } = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo.data.data
  );

  const {
    account_number,
    balance,
    bank_name,
    history,
    is_automated,
    thumbnail,
  } = savingHistory.data;

  const [isAuto, setIsAuto] = useState(is_automated);

  const handleAuto = (auto) => {
    setIsAuto(auto);
  };

  return (
    <>
      <SavingHistoryContainer>
        <Title>연결된 계좌</Title>
        <AccountInfoContainer>
          <AccountInfo>
            <BankThumbnail />
            <AccountTextContainer>
              <AccountText>{bank_name}</AccountText>
              <AccountText>{account_number}</AccountText>
            </AccountTextContainer>
            <PriceText>{stringRegexWithComma(balance)}원</PriceText>
          </AccountInfo>
        </AccountInfoContainer>
        <SavingHistoryList historyList={history} />
        <AutoSavingButton isAuto={isAuto} onHandleAuto={handleAuto} />
      </SavingHistoryContainer>
      <SavingStartButton
        bank={bank_name}
        account={account_number}
        isAuto={isAuto}
        defaultPrice={challenge_payment}
      />
    </>
  );
};

const SavingHistoryContainer = styled.div`
  padding: 30px 16px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  margin-bottom: 8px;
`;

const AccountInfoContainer = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.colorLightGray4};
  margin-bottom: 30px;
`;

const AccountInfo = styled.div`
  width: 100%;
  display: flex;
`;

const BankThumbnail = styled.img`
  width: 45px;
  height: 45px;
  background-color: wheat;
  border-radius: 50%;
  margin-right: 16px;
`;

const AccountTextContainer = styled.div`
  flex-grow: 1;
`;

const AccountText = styled.p`
  &:first-child {
    color: ${({ theme }) => theme.colors.colorBlack};
    font-size: ${({ theme }) => theme.fontSize.fontSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    line-height: 23px;
    margin-bottom: 2px;
  }

  &:nth-child(2) {
    color: ${({ theme }) => theme.colors.colorLightGray1};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    text-decoration: underline;
    text-underline-position: under;
    line-height: 20px;
  }
`;

const PriceText = styled.p`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};

  &:first-of-type {
    align-self: flex-end;
  }
`;

export default SavingHistory;
