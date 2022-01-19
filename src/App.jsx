import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Challenge from "./pages/challenge/Challenge";
import Saving from "./pages/saving/Saving";
import styled from "styled-components";
import SavingDeposit from "./pages/saving/SavingDeposit";

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/saving" element={<Saving />} />
          <Route path="/deposit" element={<SavingDeposit />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.viewSize.mobile};
`;

export default App;
