import React from "react";
import styled from "styled-components";
import DivisionLine from "../../components/DivisionLine";
import SavingRoomInfo from "../../views/saving/SavingRoomInfo";
import SavingMenuButton from "../../views/saving/SavingMenuButton";
import SavingTotalAmount from "../../views/saving/SavingTotalAmount";
import SavingAccount from "../../views/saving/SavingAccount";

const Saving = () => {
  return (
    <SavingContainer>
      <SavingRoomInfo />
      <DivisionLine />
      <SavingMenuButton />
      <SavingTotalAmount />
      <DivisionLine />
      <SavingAccount />
    </SavingContainer>
  );
};

const SavingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Saving;
