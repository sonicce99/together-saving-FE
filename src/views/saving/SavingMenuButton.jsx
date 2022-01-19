import React from "react";
import styled, { css } from "styled-components";

const SavingMenuButton = () => {
  return (
    <MenuButtonContainer>
      <Button primary>내 저축현황</Button>
      <Button>소통</Button>
    </MenuButtonContainer>
  );
};

const MenuButtonContainer = styled.div`
  height: 52px;
  display: flex;
`;

const Button = styled.button`
  line-height: 23px;
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  flex-basis: 100%;

  color: ${(props) =>
    props.primary
      ? props.theme.colors.colorBlue2
      : props.theme.colors.colorGray3};

  font-weight: ${(props) =>
    props.primary
      ? props.theme.fontWeights.weightBold
      : props.theme.fontWeights.weightNormal};

  ${(props) => (props.primary ? BorderBottom : "")}
`;

const BorderBottom = css`
  border-bottom: 3px solid ${({ theme }) => theme.colors.colorBlue2};
`;

export default SavingMenuButton;
