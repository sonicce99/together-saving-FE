import * as React from "react";
import styled from "styled-components";
import { Avatar, Stack } from "@mui/material";
import H3 from "../../components/H3.jsx";

const ChallengeDescription = ({ host_nickname, challenge_description }) => {
  return (
    <>
      <Profile>
        <Stack direction="row">
          <Avatar
            sx={{ width: 36, height: 36 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </Stack>
        <Span>{host_nickname}</Span>
      </Profile>
      <H3>저축 챌린지 설명</H3>
      <Description>{challenge_description}</Description>
    </>
  );
};

const Profile = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  margin-top: 28px;
  margin-bottom: 40px;
`;

const Span = styled.span`
  margin-left: 10px;
`;

const Description = styled(H3)`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.6px;
  margin-bottom: 40px;
`;

export default ChallengeDescription;
