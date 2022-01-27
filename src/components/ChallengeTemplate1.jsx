import React from "react";
import styled from "styled-components";
import H3 from "./H3.jsx";
import MoreShowBtn from "./MoreShowBtn.jsx";
import { useNavigate } from "react-router-dom";

const ChallengeTemplate1 = ({ title, ChallengeArray }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Div4>
        <Title>{title}</Title>
        <MoreShowBtn title={title} />
      </Div4>
      <Contents>
        <Div>
          {ChallengeArray &&
            ChallengeArray.map((EachChallenge, index) => {
              return (
                <Content key={index}>
                  <Image
                    onClick={() => {
                      navigate(`/challenge/${EachChallenge.id}`);
                    }}
                  >
                    챌린지 이미지
                  </Image>
                  <Div2>
                    <Period>{EachChallenge.period}주 저축</Period>
                    <Period>{EachChallenge.date}일 뒤 종료</Period>
                  </Div2>
                  <ChallengeName>{EachChallenge.title}</ChallengeName>
                </Content>
              );
            })}
        </Div>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  height: 214px;
  margin: 40px 0;
  border: 2px solid black;
`;

const Title = styled(H3)`
  font-family: SF Pro Text;
  font-weight: 600;
  line-height: 21px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.colorBlack};
`;

const Div4 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Contents = styled.div`
  height: 177px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

const Content = styled.div`
  width: 164px;
  border: 1px solid red;
  margin-right: 9px;
`;

const Image = styled.div`
  width: 164px;
  height: 132px;
  border: 2px solid green;
  /* background: url(image.png); */
  cursor: pointer;
  border-radius: 6px;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Period = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.colorDarkGray2};
`;

const ChallengeName = styled(H3)`
  color: ${({ theme }) => theme.colors.colorDarkGray2};
  font-size: 14px;
  margin-bottom: 0;
`;

export default ChallengeTemplate1;
