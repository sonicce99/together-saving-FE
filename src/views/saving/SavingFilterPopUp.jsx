import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const SavingFilterPopUp = ({ lookup, sort, onClose, onFilter }) => {
  const [filter, setFilter] = useState({
    lookup,
    sort,
  });

  const handleChangeFilter = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { lookup, sort } = filter;
    onFilter(lookup, sort);
    onClose();
  };

  return (
    <PopupBackground>
      <PopupContainer>
        <SortContainer>
          <Title>조회기간</Title>
          <FilterContainer>
            <Label>
              {/* value값에 대한 상수 배열을 선언한 후 인덱스 비교해서 map 돌리자. */}
              <Input
                type="radio"
                name="lookup"
                value="당일"
                checked={filter.lookup === "당일" ? true : false}
                onChange={handleChangeFilter}
              />
              <Text>당일</Text>
            </Label>
            <Label>
              <Input
                type="radio"
                name="lookup"
                value="1주일"
                checked={filter.lookup === "1주일" ? true : false}
                onChange={handleChangeFilter}
              />
              <Text>1주일</Text>
            </Label>
            <Label>
              <Input
                type="radio"
                name="lookup"
                value="1개월"
                checked={filter.lookup === "1개월" ? true : false}
                onChange={handleChangeFilter}
              />
              <Text>1개월</Text>
            </Label>
            <Label>
              <Input
                type="radio"
                name="lookup"
                value="3개월"
                checked={filter.lookup === "3개월" ? true : false}
                onChange={handleChangeFilter}
              />
              <Text>3개월</Text>
            </Label>
          </FilterContainer>
          <Title>정렬기준</Title>
          <FilterContainer>
            <Label>
              <Input
                type="radio"
                name="sort"
                value="최근저축순"
                checked={filter.sort === "최근저축순" ? true : false}
                onChange={handleChangeFilter}
              />
              <Text>최근저축순</Text>
            </Label>
            <Label>
              <Input
                type="radio"
                name="sort"
                value="과거저축순"
                checked={filter.sort === "과거저축순" ? true : false}
                onChange={handleChangeFilter}
              />
              <Text>과거저축순</Text>
            </Label>
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
