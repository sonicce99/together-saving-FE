import React from "react";
import styled from "styled-components";

const SavingMenuButton = () => {
  return (
    <MenuButtonContainer>
      <FocusButton>내 저축현황</FocusButton>
      <DefaultButton>소통</DefaultButton>
    </MenuButtonContainer>
  );
};

const MenuButtonContainer = styled.div`
  height: 52px;
  display: flex;
`;

const MenuButton = styled.button`
  line-height: 23px;
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  flex-basis: 100%;
`;

const FocusButton = styled(MenuButton)`
  color: ${({ theme }) => theme.colors.colorBlue2};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  border-bottom: 3px solid ${({ theme }) => theme.colors.colorBlue2};
`;

const DefaultButton = styled(MenuButton)`
  color: ${({ theme }) => theme.colors.colorGray3};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
`;

export default SavingMenuButton;
