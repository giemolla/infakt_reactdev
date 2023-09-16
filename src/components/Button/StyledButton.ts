import styled from "styled-components";

const StyledButton = styled.button`
  max-width: 151px;
  min-width: fit-content;
  color: ${({ theme }) => theme.color.blue[600]};
  background-color: ${({ theme }) => theme.color.blue[50]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export default StyledButton;
