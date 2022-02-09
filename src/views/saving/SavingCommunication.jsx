import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SendImage from "../../images/Send.png";
import { Avatar } from "@mui/material";
import { axiosInstance } from "../../utils/TokenApi";
import InfiniteScroll from "react-infinite-scroll-component";

const SavingCommunication = ({ challenge_id }) => {
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const getConversation = async (page) => {
    const { data } = await axiosInstance.get(
      `/api/v1/users/challenges/${challenge_id}/comment?offset=${page}`
    );
    if (data.length === 0) setHasMore((hasMore) => !hasMore);

    const array = [];
    array.push(data.data);
    setComments([...array, ...comments]);
  };

  useEffect(() => {
    getConversation(page);
  }, [page]);

  const handleScrollPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <Container>
      <Inner>
        <Conversation>
          <InfiniteScroll
            dataLength={comments.length}
            hasMore={hasMore}
            height={521}
            refreshFunction={() => handleScrollPage()}
            pullDownToRefresh
            pullDownToRefreshThreshold={70}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8595; Pull down to refresh
              </h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8593; 새로운 내용 가져오기
              </h3>
            }
          >
            {comments &&
              comments.map((EachDay, i) => {
                return (
                  <div key={i}>
                    <Date>{EachDay.date}</Date>
                    {EachDay.comments.length === 0 ? (
                      <Nocomments>
                        내용이 없습니다. 과거 내용을 보시려면 위로 당겨보세요
                      </Nocomments>
                    ) : (
                      EachDay.comments.map((EachComment, index) => {
                        return EachComment.written_by_me ? ( // 내가 쓴 글
                          <Div3 key={index}>
                            <Me>{EachComment.content}</Me>
                          </Div3>
                        ) : (
                          // 다른 사람이 쓴 글
                          <Div2 key={index}>
                            <Avatar
                              alt="userPicture"
                              src={`${EachComment.profile_picture}`}
                              sx={{
                                width: 44,
                                height: 44,
                                cursor: "pointer",
                                mr: 1.75,
                              }}
                            />
                            <Others>{EachComment.content}</Others>
                          </Div2>
                        );
                      })
                    )}
                  </div>
                );
              })}
          </InfiniteScroll>
        </Conversation>
        <Div>
          <Input placeholder="메세지 입력" />
          <Img src={SendImage} />
        </Div>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
`;

const Inner = styled.div`
  width: 343px;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

const Conversation = styled.div`
  height: 521px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 34px;
  margin-top: 7px;
`;

const Input = styled.input`
  width: 343px;
  height: 48px;
  background: ${({ theme }) => theme.colors.colorLightGray2};
  border-radius: 6px;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: 16px;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

const Others = styled.div`
  padding: 16px;
  background: #f2f3f6;
  border-radius: 10px;
`;

const Div3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Me = styled.div`
  padding: 16px;
  background: #3178ff;
  border-radius: 10px;
`;

const Date = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 16px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.colorGray3};
  text-align: center;
  margin-bottom: 33px;
`;

const Nocomments = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.colorGray3};
`;

export default SavingCommunication;
