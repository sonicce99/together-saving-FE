import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Challenge from "./pages/challenge/Challenge";
import Saving from "./pages/saving/Saving";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/saving" element={<Saving />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
