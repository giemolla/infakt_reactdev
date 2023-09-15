import styled from "styled-components";

const StyledCardsView = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  max-width: 1272px;
  display: flex;
  flex-direction: column;

  .get-more-btn {
    width: 200px;
    height: 36px;
    align-self: center;
  }
`;

export default StyledCardsView;
