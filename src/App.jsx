import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import ChallengeContainer from "./pages/challenge/ChallengeContainer";
import Saving from "./pages/saving/Saving";
import styled from "styled-components";
import SavingDeposit from "./pages/saving/SavingDeposit";
import SavingSuccess from "./views/deposit/SavingSuccess";
import ChallengePaymentContainer from "./pages/challenge/ChallengePaymentContainer";
import ChallengePaymentSuccess from "./pages/challenge/ChallengePaymentSuccess";
import MoreShow from "./pages/more/MoreShow";

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/challenge/:id" element={<ChallengeContainer />} />
        <Route
          path="/challenge/:id/payment"
          element={<ChallengePaymentContainer />}
        />
        <Route
          path="/challenge/:id/success"
          element={<ChallengePaymentSuccess />}
        />
        <Route path="/saving/:id" element={<Saving />} />
        <Route path="/saving/:id/deposit" element={<SavingDeposit />} />
        <Route path="/saving/:id/success" element={<SavingSuccess />} />
        <Route path="/moreshow/:name" element={<MoreShow />} />
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.viewSize.mobile};
`;

export default App;
