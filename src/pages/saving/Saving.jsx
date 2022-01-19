import React from "react";
import styled from "styled-components";
import DivisionLine from "../../components/DivisionLine";
import SavingRoomInfo from "../../views/saving/SavingRoomInfo";
import SavingMenuButton from "../../views/saving/SavingMenuButton";
import SavingTotalAmount from "../../views/saving/SavingTotalAmount";
import SavingAccount from "../../views/saving/SavingAccount";
import { Link } from "react-router-dom";
import SavingStartButton from "../../views/saving/SavingStartButton";

const Saving = () => {
  return (
    <SavingContainer>
      <Link to="/challenge">
        <SavingRoomInfo />
      </Link>
      <DivisionLine />
      <SavingMenuButton />
      <SavingTotalAmount />
      <DivisionLine />
      <SavingAccount />
      <SavingStartButton />
    </SavingContainer>
  );
};

const SavingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Saving;
