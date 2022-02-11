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
  const [message, setMessage] = useState("");

  const getConversation = async (page) => {
    const { data } = await axiosInstance.get(
      `/api/v1/users/challenges/${challenge_id}/comment?offset=${page}`
    );
    if (page === 0) {
      const array = [];
      array.push(data.data);
      setPage(0);
      setComments(array);
    } else {
      if (data.data.challenge_comments.length === 0) setHasMore(false);
      const array = [];
      array.push(data.data);
      setComments([...comments, ...array]);
    }
  };

  useEffect(() => {
    getConversation(page);
  }, [page]);

  const handleScrollPage = () => {
    setPage((page) => page + 1);
  };

  const handlePostComments = async () => {
    await axiosInstance.post(
      `/api/v1/users/challenges/${challenge_id}/comment`,
      {
        content: message,
      }
    );
    getConversation(0);
  };

  const handleComments = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Container>
      <Inner>
        <Conversation>
          <div
            id="scrollableDiv"
            style={{
              overflow: "auto",
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            <InfiniteScroll
              dataLength={comments.length}
              hasMore={hasMore}
              height={521}
              next={() => handleScrollPage()}
              style={{ display: "flex", flexDirection: "column-reverse" }}
              inverse={true}
              scrollableTarget="scrollableDiv"
            >
              {comments &&
                comments.map((EachDay, i) => {
                  return (
                    <div key={i}>
                      <Date>{EachDay.date}</Date>
                      {EachDay.challenge_comments.length === 0 ? (
                        <Nocomments>더 이상 내용이 없습니다.</Nocomments>
                      ) : (
                        EachDay.challenge_comments.map((EachComment, index) => {
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
          </div>
        </Conversation>
        <Div>
          <Input
            placeholder="메세지 입력"
            onChange={(e) => handleComments(e)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.target.value = "";
                handlePostComments();
              }
            }}
          />
          <Img
            src={SendImage}
            onClick={() => {
              handlePostComments();
            }}
          />
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
  margin-bottom: 36px;
`;

const Me = styled.div`
  padding: 16px;
  background: #3178ff;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.colorWhite};
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
  margin-bottom: 36px;
`;

export default SavingCommunication;
