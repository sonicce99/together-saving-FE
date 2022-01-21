import * as React from "react";
import styled from "styled-components";
import { Avatar, Stack } from "@mui/material";
import Button from "../../components/Button.jsx";
import H3 from "../../components/H3.jsx";
import GrayBackground from "../../components/GrayBackground.jsx";

const ChallengeReview = ({ challenge_reviews }) => {
  return (
    <>
      <H3>참여후기</H3>
      <Div>
        {challenge_reviews &&
          challenge_reviews.map((challenge_review, index) => {
            return (
              <GrayBackground key={index}>
                <Profile>
                  <Stack direction="row">
                    <Avatar
                      sx={{ width: 32, height: 32 }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </Stack>
                  <NickName>{challenge_review.nickname}</NickName>
                </Profile>
                <Content>{challenge_review.content}</Content>
              </GrayBackground>
            );
          })}
      </Div>
      <ReviewBtn>후기 작성하기</ReviewBtn>
    </>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

const Profile = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  margin-top: 16px;
`;

const NickName = styled.span`
  margin-left: 10px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
`;

const Content = styled(H3)`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 12px;
  margin: 0 10px 28px 14px;
  width: 234px;
`;

const ReviewBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.colorBlue2};
  background-color: ${({ theme }) => theme.colors.colorWhite};
  border: 1px solid #3178ff;
  margin-bottom: 40px;
`;

export default ChallengeReview;
