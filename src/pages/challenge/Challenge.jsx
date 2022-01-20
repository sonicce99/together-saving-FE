import React from "react";
import Event from "../../components/Event.jsx";
import MainChallengeDetails from "../../views/challenge/MainChallengeDetails";
import PopularChallenge from "../../components/PopularChallenge.jsx";
import Button from "../../components/Button.jsx";

const Challenge = () => {
  return (
    <>
      <Event>Picture</Event>
      <MainChallengeDetails />
      <PopularChallenge />
      <Button>챌린지 함께하기</Button>
    </>
  );
};

export default Challenge;
