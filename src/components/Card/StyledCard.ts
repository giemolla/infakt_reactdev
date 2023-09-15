import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey[200]};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 24px;
  width: 300px;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;

  .card-header {
    display: flex;
    column-gap: 16px;
    align-items: flex-start;

    .img-wrapper {
      min-width: 64px;
      max-width: 64px;
      width: 64px;
      height: 64px;
      border-radius: 8px;
      overflow: hidden;
    }

    .title {
      color: ${({ theme }) => theme.color.grey[800]};
      font-size: ${({ theme }) => theme.fontSize.s};
      line-height: ${({ theme }) => theme.lineHeight.s};
    }

    .name {
      font-size: ${({ theme }) => theme.fontSize.m};
      line-height: ${({ theme }) => theme.lineHeight.m};
      font-weight: 700;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    .info-type {
      color: ${({ theme }) => theme.color.grey[800]};
      font-size: ${({ theme }) => theme.fontSize.xs};
      line-height: ${({ theme }) => theme.lineHeight.xs};
    }

    .info {
      font-size: ${({ theme }) => theme.fontSize.s};
      line-height: ${({ theme }) => theme.lineHeight.s};

      &.email {
        text-decoration: underline;
      }

      .currency {
        font-size: ${({ theme }) => theme.fontSize.xxs};
        line-height: ${({ theme }) => theme.lineHeight.xxs};
      }
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default StyledCard;
