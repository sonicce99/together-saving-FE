import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Challenge from "./pages/challenge/Challenge";
import styled from "styled-components";
import SavingDeposit from "./pages/saving/SavingDeposit";
import SavingSuccess from "./views/deposit/SavingSuccess";
import ChallengePayment from "./pages/challenge/ChallengePayment";
import Saving from "./pages/saving/Saving";

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/challenge/:id" element={<Challenge />} />
        <Route path="/challenge/payment" element={<ChallengePayment />} />
        <Route path="/saving" element={<Saving />} />
        <Route path="/deposit" element={<SavingDeposit />} />
        <Route path="/success" element={<SavingSuccess />} />
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.viewSize.mobile};
`;

export default App;
