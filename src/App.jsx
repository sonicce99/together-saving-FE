import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Challenge from "./pages/challenge/Challenge";
import Saving from "./pages/saving/Saving";
import styled from "styled-components";
import SavingDeposit from "./pages/saving/SavingDeposit";
import SavingSuccess from "./views/deposit/SavingSuccess";

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/challenge" element={<Challenge />} />
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
