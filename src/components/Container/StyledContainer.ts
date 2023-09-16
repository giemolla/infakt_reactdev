import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1272px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media only screen and (${({ theme }) => theme.breakpoints.xxl}) {
    max-width: 1272px;
    align-items: flex-start;
  }
`;

export default StyledContainer;
