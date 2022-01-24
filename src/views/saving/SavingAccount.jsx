import React from "react";
import styled from "styled-components";
import AutoSavingButton from "./AutoSavingButton";
import SavingHistoryList from "./SavingHistoryList";

const SavingAccount = ({ savingHistory }) => {
  const {
    account_number,
    balance,
    bank_name,
    history,
    is_automated,
    thumbnail,
  } = savingHistory.data;

  return (
    <AccountContainer>
      <Title>연결된 계좌</Title>
      <BankInfoContainer>
        <BankInfo>
          <BankThumbnail />
          <BankTextContainer>
            <BankText>{bank_name}</BankText>
            <BankText>{account_number}</BankText>
          </BankTextContainer>
          <PriceText>
            {balance &&
              balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </PriceText>
        </BankInfo>
      </BankInfoContainer>
      <SavingHistoryList historyList={history} />
      <AutoSavingButton isAuto={is_automated} />
    </AccountContainer>
  );
};

const AccountContainer = styled.div`
  padding: 30px 16px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  margin-bottom: 8px;
`;

const BankInfoContainer = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.colorLightGray4};
  margin-bottom: 30px;
`;

const BankInfo = styled.div`
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

const BankTextContainer = styled.div`
  flex-grow: 1;
`;

const BankText = styled.p`
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

export default SavingAccount;
