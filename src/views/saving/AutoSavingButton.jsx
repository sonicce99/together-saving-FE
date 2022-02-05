import React from "react";
import styled from "styled-components";
import { axiosInstance } from "../../utils/TokenApi";

const AutoSavingButton = ({ isAuto, onHandleAuto, id }) => {
  const handleAutoSwitch = () => {
    // axiosInstance
    //   .post(`/api/v1/challenges/${id}/auto`)
    //   .then((res) => console.log(res));
    onHandleAuto((isAuto) => !isAuto);
  };

  return (
    <AutoSavingContainer>
      <Text>자동저축하기</Text>
      <Label>
        <Input type="checkbox" onChange={handleAutoSwitch} checked={isAuto} />
        <Switch />
      </Label>
    </AutoSavingContainer>
  );
};

const AutoSavingContainer = styled.div`
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.colorGray1};
  font-size: ${({ theme }) => theme.fontSize.fontXSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Switch = styled.div`
  width: 44px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.colorGray2};
  border-radius: 40px;
  position: relative;
  transition: 200ms all;

  &::before {
    content: "";
    width: 22px;
    height: 22px;
    background-color: ${({ theme }) => theme.colors.colorWhite};
    border-radius: 40px;
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translate(0, -50%);
    transition: 200ms all;
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background-color: ${({ theme }) => theme.colors.colorBlue2};

    &::before {
      transform: translate(18px, -50%);
    }
  }
`;

export default AutoSavingButton;
