import React, { useState } from "react";
import styled from "styled-components";
import DivisionLine from "../../components/DivisionLine";
import SavingTabMenu from "../../views/saving/SavingTabMenu";
import SavingRoomInfoContainer from "./SavingRoomInfoContainer";

const SavingMain = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleChangeTab = (current) => setCurrentTab(current);

  return (
    <SavingContainer>
      {currentTab === 0 && (
        <>
          <SavingRoomInfoContainer />
          <DivisionLine />
        </>
      )}
      <SavingTabMenu currentTab={currentTab} onChangeTab={handleChangeTab} />
    </SavingContainer>
  );
};

const SavingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SavingMain;
