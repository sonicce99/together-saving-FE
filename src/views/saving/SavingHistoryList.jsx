import React, { useState } from "react";
import styled from "styled-components";
import Portal from "../../components/Portal";
import SavingHistoryItem from "./SavingHistoryItem";
import historyFilter from "../../images/history_filter.png";
import SavingFilterPopUp from "./SavingFilterPopUp";
import { periodKor, orderKor } from "../../utils/engDataRegex";
import { useEffect } from "react";
import { axiosInstance } from "../../utils/TokenApi";

const SavingHistoryList = ({ id, filter, historyList }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [filteredData, setFilteredData] = useState(historyList);
  const [option, setOption] = useState(filter);

  let isCleanUp = true;

  const handlePopup = () => {
    setShowPopup((showPopup) => !showPopup);
  };

  const handleFilter = (period, order) => {
    setOption({
      ...option,
      period,
      order,
    });
  };

  const handleHistoryData = async () => {
    const { data } = await axiosInstance.get(
      `/api/v1/users/challenges/${id}/saving-histories?period=${option.period}&ordering=${option.order}`
    );
    if (isCleanUp) setFilteredData(data.data.saving_history);
  };

  useEffect(() => {
    handleHistoryData();
    return () => (isCleanUp = false);
  }, [option]);

  return (
    <>
      <TitleContainer>
        <Title>저축 내역</Title>
        <HistoryButtonContainer>
          <Text>
            {option.period === "today"
              ? periodKor(option.period)
              : `최근 ${periodKor(option.period)}`}
          </Text>
          <Text>{orderKor(option.order)}</Text>
          <HistoryButton>
            <HistoryIcon src={historyFilter} alt="icon" onClick={handlePopup} />
          </HistoryButton>
          {showPopup && (
            <Portal>
              <SavingFilterPopUp
                period={option.period}
                order={option.order}
                onFilter={handleFilter}
                onClose={handlePopup}
              />
            </Portal>
          )}
        </HistoryButtonContainer>
      </TitleContainer>
      <HistoryContainer>
        {filteredData.length > 0 ? (
          Object.values(filteredData).map((history, index) => (
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

export default SavingHistoryList;
