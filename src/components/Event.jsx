import styled from "styled-components";

const Event = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: ${(props) => (props.main ? "307px" : "270px")};
  border: 2px solid black;
`;

export default Event;
