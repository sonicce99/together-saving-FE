import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";

// const LOOKUP_PERIODS = ["당일", "1주일", "1개월", "3개월"];
// const SORT_BY_VALUE = ["최근저축순", "과거저축순"];
const LOOKUP_PERIODS = ["today", "1week", "1month", "3month"];
const SORT_BY_VALUE = ["desc", "asc"];

const SavingFilterPopUp = ({ period, order, onFilter, onClose }) => {
  const [filter, setFilter] = useState({
    period,
    order,
  });

  const handleChangeFilter = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { period, order } = filter;
    onFilter(period, order);
    onClose();
  };

  return (
    <PopupBackground>
      <PopupContainer>
        <SortContainer>
          <Title>조회기간</Title>
          <FilterContainer>
            {LOOKUP_PERIODS.map((period, index) => (
              <Label key={index}>
                <Input
                  type="radio"
                  name="period"
                  value={period}
                  checked={filter.period === period ? true : false}
                  onChange={handleChangeFilter}
                />
                <Text>{period}</Text>
              </Label>
            ))}
          </FilterContainer>
          <Title>정렬기준</Title>
          <FilterContainer>
            {SORT_BY_VALUE.map((order, index) => (
              <Label key={index}>
                <Input
                  type="radio"
                  name="order"
                  value={order}
                  checked={filter.order === order ? true : false}
                  onChange={handleChangeFilter}
                />
                <Text>{order}</Text>
              </Label>
            ))}
          </FilterContainer>
        </SortContainer>
        <ButtonContainer>
          <Button onClick={handleSubmit}>조회</Button>
        </ButtonContainer>
      </PopupContainer>
    </PopupBackground>
  );
};

const PopupBackground = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 100vh;
  background-color: rgba(76, 76, 76, 0.7);
  position: fixed;
  bottom: 0;
`;

const PopupContainer = styled.div`
  width: 100%;
  height: 288px;
  border-radius: 10px 10px 0 0;
  background-color: white;
  position: absolute;
  bottom: 0;
  animation: fadeInUp 0.45s ease-out;

  @keyframes fadeInUp {
    0% {
      height: 0;
    }
    100% {
      height: ${(props) => props.height};
    }
  }
`;

const SortContainer = styled.div`
  padding: 18px 20px 0;
`;

const FilterContainer = styled.div`
  height: 39px;
  margin-bottom: 22px;
  display: flex;

  &:last-child {
    margin-bottom: 29px;
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colorGray3};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  margin-bottom: 10px;
`;

const Text = styled(Title)`
  border: 1px solid ${({ theme }) => theme.colors.colorGray2};
  height: 39px;
  border-radius: 20px;
  padding: 8px 16px;
`;

const Label = styled.label`
  display: flex;
  margin-right: 14px;

  &:nth-child(4),
  &:nth-child(6) {
    margin-right: 0;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Text} {
    color: ${({ theme }) => theme.colors.colorBlue1};
    border-color: ${({ theme }) => theme.colors.colorBlue1};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default SavingFilterPopUp;
