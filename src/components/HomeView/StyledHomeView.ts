import styled from "styled-components";

const StyledHomeView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (${({ theme }) => theme.breakpoints.xxl}) {
    align-items: flex-start;
  }
`;

export default StyledHomeView;
