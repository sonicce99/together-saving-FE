import React from "react";
import styled from "styled-components";
import H3 from "../../components/H3.jsx";
import GrayBackground from "../../components/GrayBackground.jsx";
import { Avatar, Stack } from "@mui/material";
import defaultImage from "../../images/default_profile.png";

const ChallengeReviewItem = ({ reviews }) => {
  return (
    <>
      <GrayBackground review>
        <Profile>
          <Stack direction="row">
            <Avatar
              sx={{ width: 32, height: 32 }}
              alt="Remy Sharp"
              src={
                reviews.profile_picture ? reviews.profile_picture : defaultImage
              }
            />
          </Stack>
          <NickName>{reviews.nickname}</NickName>
        </Profile>
        <Content>
          {reviews.content}
          <MoreButton onClick={() => handleMoreText()}>버튼</MoreButton>
        </Content>
      </GrayBackground>
    </>
  );
};

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

const MoreButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  color: ${({ theme }) => theme.colors.colorGray3};
  margin-left: 5px;

  ${(props) => props.review && `font-size: 12px`}
`;

export default ChallengeReviewItem;
