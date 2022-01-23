import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const SavingFilterPopUp = () => {
  return (
    <PopupBackground>
      <PopupContainer>
        <SortContainer>
          <Title>조회기간</Title>
          <FilterContainer>
            <Label>
              <Input type="radio" name="lookup" value="today" />
              <Text>당일</Text>
            </Label>
            <Label>
              <Input type="radio" name="lookup" value="week" />
              <Text>1주일</Text>
            </Label>
            <Label>
              <Input type="radio" name="lookup" value="one_month" />
              <Text>1개월</Text>
            </Label>
            <Label>
              <Input type="radio" name="lookup" value="three_month" />
              <Text>3개월</Text>
            </Label>
          </FilterContainer>
          <Title>정렬기준</Title>
          <FilterContainer>
            <Label>
              <Input type="radio" name="sort" value="recent" />
              <Text>최근저축순</Text>
            </Label>
            <Label>
              <Input type="radio" name="sort" value="acient" />
              <Text>과거저축순</Text>
            </Label>
          </FilterContainer>
        </SortContainer>
        <ButtonContainer>
          <Button>조회</Button>
        </ButtonContainer>
      </PopupContainer>
    </PopupBackground>
  );
};

const PopupBackground = styled.div`
  height: 100vh;
  background-color: rgba(76, 76, 76, 0.7);
  position: relative;
`;

const PopupContainer = styled.div`
  width: 100%;
  height: 288px;
  border-radius: 10px 10px 0 0;
  background-color: white;
  position: absolute;
  bottom: 0;
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
