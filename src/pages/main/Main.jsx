import React from "react";
import Header from "../../views/main/Header.jsx";
import Event from "../../views/main/Event.jsx";
import MainTabs from "../../views/main/MainTabs.jsx";
import BottomNav from "../../views/main/BottomNav.jsx";

const Main = () => {
  return (
    <>
      <Header />
      <Event />
      <MainTabs />
      <BottomNav />
    </>
  );
};

export default Main;
