import React from "react";
import styled from "styled-components";

const SavingRoomInfo = ({ summaryData }) => {
  return (
    <InfoContainer>
      <InfoThumbnail />
      <InfoTextContainer>
        <p>{summaryData.challenge_name}</p>
        <p>{`${summaryData.start_date} - ${summaryData.end_date}`}</p>
      </InfoTextContainer>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  height: 97px;
  padding: 14px 16px;
  display: flex;
`;

const InfoThumbnail = styled.div`
  width: 92px;
  height: 70px;
  border-radius: 5px;
  margin-right: 16px;
  background-color: wheat;
`;

const InfoTextContainer = styled.div`
  p:first-child {
    color: ${({ theme }) => theme.colors.colordarkGray1};
    font-size: ${({ theme }) => theme.fontSize.fontMideum};
    font-weight: ${({ theme }) => theme.fontWeights.weightBold};
    margin-bottom: 10px;
  }

  p:nth-child(2) {
    margin-bottom: 2px;
    line-height: 20px;
  }

  p:nth-child(3) {
    line-height: 16px;
  }

  p:nth-child(n + 2) {
    color: ${({ theme }) => theme.colors.colorLightGray1};
    font-size: ${({ theme }) => theme.fontSize.fontSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  }
`;

export default SavingRoomInfo;
