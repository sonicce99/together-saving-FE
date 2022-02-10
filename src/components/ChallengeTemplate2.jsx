import React from "react";
import styled from "styled-components";
import H3 from "./H3.jsx";
import LikeButton from "./LikeButton.jsx";
import MoreShowBtn from "./MoreShowBtn.jsx";
import { useNavigate } from "react-router-dom";

const MODE = ["자율", "경쟁"];

const ChallengeTemplate2 = ({ title, ChallengeArray }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Div5>
        <Title>{title}</Title>
        <MoreShowBtn title={title} />
      </Div5>
      <Contents>
        <Div>
          {ChallengeArray &&
            ChallengeArray.map((EachChallenge, index) => {
              return (
                <Content key={index}>
                  <ThumbnailInfo>
                    <Image
                      src={EachChallenge.thumbnail}
                      onClick={() => {
                        navigate(`/challenge/${EachChallenge.id}`);
                      }}
                      alt="thumbnail"
                    />
                    <ChallengeMode>
                      {EachChallenge.mode === "FREE" ? MODE[0] : MODE[1]}
                    </ChallengeMode>
                  </ThumbnailInfo>
                  <Div2>
                    <Period>{EachChallenge.period}주 저축</Period>
                    <Period>{EachChallenge.remain_date}일 뒤 시작</Period>
                  </Div2>
                  <ChallengeName>{EachChallenge.title}</ChallengeName>
                  <Div3>
                    <Div4>
                      {EachChallenge.tags.map((tag, index) => {
                        return <Tags key={index}>{tag}</Tags>;
                      })}
                    </Div4>
                    <LikeButton
                      challengeId={EachChallenge.id}
                      is_wished={EachChallenge.is_wished}
                    />
                  </Div3>
                </Content>
              );
            })}
        </Div>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  height: 315px;
  margin: 40px 0;
`;

const Title = styled(H3)`
  font-family: SF Pro Text;
  font-weight: 600;
  line-height: 21px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.colorBlack};
`;

const Div5 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Contents = styled.div`
  height: 280px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const Content = styled.div`
  width: 253px;
  margin-right: 16px;
  margin-bottom: 140px;
`;

const ThumbnailInfo = styled.div`
  position: relative;
  margin-bottom: 4px;
`;

const Image = styled.img`
  width: 253px;
  height: 200px;
  background-color: wheat;
  cursor: pointer;
  border-radius: 6px;
`;

const ChallengeMode = styled.div`
  width: 38px;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.colorDarkGray1};
  color: ${({ theme }) => theme.colors.colorWhite};
  text-align: center;
  border-radius: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
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
  font-size: 16px;
  margin-bottom: 6px;
`;

const Div3 = styled(Div2)`
  font-size: 14px;
  margin-bottom: 0;
`;

const Div4 = styled.div`
  display: flex;
`;

const Tags = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.colorGray1};
`;

export default ChallengeTemplate2;
