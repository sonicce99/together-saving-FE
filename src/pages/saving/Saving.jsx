import React, { useState } from "react";
import styled from "styled-components";
import SavingRoomInfoContainer from "./SavingRoomInfoContainer";
import DivisionLine from "../../components/DivisionLine";
import SavingTabMenu from "../../views/saving/SavingTabMenu";
import { useMatch } from "react-router-dom";

const Saving = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleChangeTab = (current) => setCurrentTab(current);

  // 챌린지 id 가져오기
  const {
    params: { id },
  } = useMatch("/saving/:id/");

  return (
    <SavingContainer>
      {currentTab === 0 && (
        <>
          <SavingRoomInfoContainer challengeId={id} />
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

export default Saving;
