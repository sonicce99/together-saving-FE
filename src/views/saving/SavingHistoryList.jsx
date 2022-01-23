import React, { useState } from "react";
import styled from "styled-components";
import SavingHistoryItem from "./SavingHistoryItem";
import historyFilter from "../../images/history_filter.png";
import { createPortal } from "react-dom";
import SavingFilterPopUp from "./SavingFilterPopUp";

const PopupPortal = ({ children }) => {
  return createPortal(children, document.getElementById("pop-up"));
};

const SavingHistory = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <TitleContainer>
        <Title>저축 내역</Title>
        <HistoryButtonContainer>
          <Text>최근 1주일</Text>
          <Text>과거저축순</Text>
          <HistoryButton>
            <HistoryIcon src={historyFilter} alt="icon" onClick={handlePopup} />
          </HistoryButton>
          {showPopup && (
            <PopupPortal>
              <SavingFilterPopUp onClose={handlePopup} />
            </PopupPortal>
          )}
        </HistoryButtonContainer>
      </TitleContainer>
      <HistoryContainer>
        <SavingHistoryItem />
      </HistoryContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const HistoryButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.colorLightGray1};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};

  &:first-child {
    margin-right: 8px;
  }

  &:nth-child(2) {
    margin-right: 4px;
  }
`;

const HistoryButton = styled.button`
  width: 16px;
  height: 16px;
`;

const HistoryIcon = styled.img`
  width: 100%;
`;

const HistoryContainer = styled.ul`
  height: 97px;
  margin-bottom: 56px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;

export default SavingHistory;
