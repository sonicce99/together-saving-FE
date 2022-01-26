import React, { useState } from "react";
import styled from "styled-components";
import SavingStatus from "../../pages/saving/SavingStatus";

const SavingTabMenu = ({ endDate }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const components = {
    0: <SavingStatus endDate={endDate} />,
    1: "소통",
  };

  const handleTabMenu = (e) => {
    setCurrentTab(e.target.value);
  };

  return (
    <>
      <MenuListContainer>
        <MenuList onClick={handleTabMenu} value={0} current={currentTab}>
          내 저축현황
        </MenuList>
        <MenuList onClick={handleTabMenu} value={1} current={currentTab}>
          소통
        </MenuList>
      </MenuListContainer>
      <MenuContentContainer>{components[currentTab]}</MenuContentContainer>
    </>
  );
};

const MenuListContainer = styled.ul`
  height: 52px;
  display: flex;
`;

const MenuList = styled.li`
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  color: ${({ theme }) => theme.colors.colorGray3};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  cursor: pointer;

  ${(props) =>
    props.value === props.current &&
    `
  color: #3178FF;
  font-weight: 700;
  border-bottom: 2px solid #3178FF`}
`;

const MenuContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SavingTabMenu;
