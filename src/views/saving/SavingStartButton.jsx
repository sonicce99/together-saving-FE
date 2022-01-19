import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const SavingStartButton = () => {
  return (
    <SavingButtonContainer>
      <Link to="/saving/deposit">
        <Button>저축하기</Button>
      </Link>
    </SavingButtonContainer>
  );
};

const SavingButtonContainer = styled.div`
  padding: 8px 16px 34px;
  box-shadow: 0px 4px 21px -1px rgba(0, 0, 0, 0.18);
`;

export default SavingStartButton;
