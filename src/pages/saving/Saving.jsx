import React, { useState } from "react";
import styled from "styled-components";
import SavingRoomInfoContainer from "./SavingRoomInfoContainer";
import DivisionLine from "../../components/DivisionLine";
import SavingTabMenu from "../../views/saving/SavingTabMenu";
import Time from "../../components/Time";
import Header from "../../components/Header";
import { useMatch } from "react-router-dom";

const Saving = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleChangeTab = (current) => setCurrentTab(current);

  const {
    params: { id },
  } = useMatch("/saving/:id/");

  return (
    <>
      {/* <Time /> */}
      <Header sub />
      <SavingContainer>
        {currentTab === 0 && (
          <>
            <SavingRoomInfoContainer id={id} />
            <DivisionLine />
          </>
        )}
        <SavingTabMenu
          currentTab={currentTab}
          onChangeTab={handleChangeTab}
          id={id}
        />
      </SavingContainer>
    </>
  );
};

const SavingContainer = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  display: flex;
  flex-direction: column;
  padding-top: 96px;
`;

export default Saving;
