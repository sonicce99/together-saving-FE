import styled from "styled-components";

const GrayBackground = styled.div`
  width: 254px;
  background: ${({ theme }) => theme.colors.colorLightGray2};
  border-radius: 10px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export default GrayBackground;
