import { CSSProperties } from "styled-components";
import Loader from "../Loader/Loader";
import StyledButton from "./StyledButton";

const Button: React.FC<IButtonProps> = ({
  children,
  type = "button",
  disabled,
  className,
  loading,
  style,
  onClick,
}) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      type={type}
      style={style}
      onClick={onClick}
    >
      {loading ? <Loader /> : children}
    </StyledButton>
  );
};

interface IButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default Button;
