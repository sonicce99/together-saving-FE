import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import ChallengeContainer from "./pages/challenge/ChallengeContainer";
import Saving from "./pages/saving/Saving";
import styled from "styled-components";
import SavingDeposit from "./pages/saving/SavingDeposit";
import SavingSuccess from "./views/deposit/SavingSuccess";
import ChallengePayment from "./pages/challenge/ChallengePayment";
import ChallengePaymentSuccess from "./pages/challenge/ChallengePaymentSuccess";

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/challenge/:id" element={<ChallengeContainer />} />
        <Route path="/challenge/payment" element={<ChallengePayment />} />
        <Route
          path="/challenge/success"
          element={<ChallengePaymentSuccess />}
        />
        <Route path="/saving" element={<Saving />} />
        <Route path="/saving/deposit" element={<SavingDeposit />} />
        <Route path="/saving/success" element={<SavingSuccess />} />
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.viewSize.mobile};
`;

export default App;
