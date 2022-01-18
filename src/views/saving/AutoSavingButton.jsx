import React from "react";
import styled from "styled-components";

const AutoSavingButton = () => {
  return (
    <AutoSavingContainer>
      <Text>자동저축하기</Text>
      <Switch type="checkbox" />
    </AutoSavingContainer>
  );
};

const AutoSavingContainer = styled.div`
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid purple;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.colorGray1};
  font-size: ${({ theme }) => theme.fontSize.fontXSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
`;

const Switch = styled.input`
  width: 44px;
  height: 100%;
  position: relative;
`;

const Slider = styled.span`
  position: absolute;
`;

export default AutoSavingButton;
