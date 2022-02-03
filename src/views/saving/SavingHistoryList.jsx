import React, { useState } from "react";
import styled from "styled-components";
import Portal from "../../components/Portal";
import SavingHistoryItem from "./SavingHistoryItem";
import historyFilter from "../../images/history_filter.png";
import SavingFilterPopUp from "./SavingFilterPopUp";
import axios from "axios";

const SavingHistory = ({ historyList }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [history, setHistory] = useState(historyList);
  const [filter, setFilter] = useState({
    lookup: "1주일",
    sort: "최근저축순",
  });

  const { lookup, sort } = filter;

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleFilter = (lookup, sort) => {
    setFilter({
      ...filter,
      lookup,
      sort,
    });
  };

  // console.log(lookup, sort);
  // axios
  //   .post("../../modules/history_acient", { period: lookup, ordering: sort })
  //   .then((res) => {
  //     console.log(res);
  //   });

  return (
    <>
      <TitleContainer>
        <Title>저축 내역</Title>
        <HistoryButtonContainer>
          <Text>{lookup === "당일" ? lookup : `최근 ${lookup}`}</Text>
          <Text>{sort}</Text>
          <HistoryButton>
            <HistoryIcon src={historyFilter} alt="icon" onClick={handlePopup} />
          </HistoryButton>
          {showPopup && (
            <Portal>
              <SavingFilterPopUp
                lookup={lookup}
                sort={sort}
                onClose={handlePopup}
                onFilter={handleFilter}
              />
            </Portal>
          )}
        </HistoryButtonContainer>
      </TitleContainer>
      <HistoryContainer>
        {history.length > 0 ? (
          Object.values(history).map((history, index) => (
            <SavingHistoryItem key={index} historyItem={history} />
          ))
        ) : (
          <Notice>아직 저축내역이 없어요</Notice>
        )}
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

const Notice = styled(Title)`
  color: ${({ theme }) => theme.colors.colorLightGray1};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
`;

export default SavingHistory;
