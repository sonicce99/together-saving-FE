import styled from "styled-components";

const GrayBackground = styled.div`
  width: 254px;
  min-height: 160px;
  background: ${({ theme }) => theme.colors.colorLightGray2};
  border-radius: 10px;
  margin-right: 16px;
  margin-bottom: 16px;

  /* ${(props) => props.isMore && `height: auto;`} */
`;

export default GrayBackground;
