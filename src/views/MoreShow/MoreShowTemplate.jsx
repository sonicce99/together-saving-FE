import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useMatch } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import H3 from "../../components/H3";

const MoreShowTemplate = () => {
  const [ShowData, setShowData] = useState([]);
  const [challengeName, setChallengeName] = useState("");

  let navigate = useNavigate();

  // 챌린지 종류 가져오기
  let {
    params: { name },
  } = useMatch("/moreshow/:name");

  useEffect(() => {
    (async () => {
      try {
        switch (name) {
          case "participate":
            // 참여 중인 챌린지 가져오기
            const participatingData = await axios.get(
              "../../modules/participatingChallenge.json"
            );
            setShowData(participatingData.data.data.challenges);
            setChallengeName("참여중인 챌린지");
            break;

          case "popular":
            // 인기 챌린지 가져오기
            const popularData = await axios.get(
              "../../modules/popularChallenge.json"
            );
            setShowData(popularData.data.data.challenges);
            setChallengeName("인기 챌린지");
            break;

          case "particular":
            // 나와 비슷한 사람들의 챌린지 가져오기
            const similarityData = await axios.get(
              "../../modules/similarity.json"
            );
            setShowData(similarityData.data.data.challenges);
            setChallengeName("20대가 좋아하는 챌린지");
            break;

          case "all":
            // 전체 챌린지 가져오기
            const wholeChallengeData = await axios.get(
              "../../modules/wholeChallenge.json"
            );
            setShowData(wholeChallengeData.data.data.challenges);
            setChallengeName("전체 챌린지");
            break;

          default:
            console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(ShowData);

  return (
    <Container>
      <Inner>
        <Title>{challengeName}</Title>
        <Contents>
          <Div>
            {ShowData &&
              ShowData.map((EachChallenge, index) => {
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
                    <Div3>
                      {EachChallenge.tags.map((tag, index) => {
                        return <Tags key={index}>{tag.tag_name}&nbsp;</Tags>;
                      })}
                    </Div3>
                  </Content>
                );
              })}
          </Div>
        </Contents>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  height: 631px;
  border: 2px solid black;
`;

const Inner = styled.div`
  width: 343px;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

const Title = styled(H3)`
  font-family: SF Pro Text;
  font-weight: 600;
  line-height: 21px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.colorBlack};
`;

const Contents = styled.div`
  height: 578px;
  width: 343px;
  overflow: scroll;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px 15px;
`;

const Content = styled.div`
  width: 164px;
  border: 1px solid red;
  /* margin-right: 15px; */
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
  margin-bottom: 4px;
`;

const Div3 = styled.div`
  display: flex;
`;

const Tags = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 12px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.colorGray1};
`;

export default MoreShowTemplate;
