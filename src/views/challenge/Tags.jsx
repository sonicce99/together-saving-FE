import React from "react";
import styled from "styled-components";
import LikeButton from "../../components/LikeButton";

const Tags = ({ is_wished, tags }) => {
  return (
    <TagBox>
      <Div>
        {tags &&
          tags.map((tag, index) => {
            return (
              <TagDesign key={index}>
                <Title>{tag.tag_name}</Title>
              </TagDesign>
            );
          })}
      </Div>
      <LikeButton is_wished={is_wished} />
    </TagBox>
  );
};

const TagBox = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
`;

const TagDesign = styled.div`
  flex-direction: row;
  margin-right: 6px;
  background: #f5f5f5;
  border-radius: 222px;
  padding: 4px 10px;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
`;

export default Tags;
