import styled from "styled-components";

const StyledLoader = styled.div`
  width: 15px;
  padding: 2px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.blue[600]};
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
  margin: 0 auto;

  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default StyledLoader;
