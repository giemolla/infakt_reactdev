import StyledContainer from "./StyledContainer";

const Container: React.FC<IContainerProps> = ({
  children,
}: IContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

interface IContainerProps {
  children: React.ReactNode;
}

export default Container;
