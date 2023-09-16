import styled from "styled-components";

const StyledCardsView = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  max-width: 1272px;
  display: flex;
  flex-direction: column;

  .go-back {
    position: absolute;
    top: 24px;
    left: 24px;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.color.grey[800]};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    .arrow-left {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-top: 2px solid ${({ theme }) => theme.color.grey[800]};
      border-right: 2px solid ${({ theme }) => theme.color.grey[800]};
      transform: rotate(-135deg);
      margin-right: 8px;
    }
  }

  .get-more-btn {
    width: 200px;
    height: 36px;
    align-self: center;
  }
`;

export default StyledCardsView;
