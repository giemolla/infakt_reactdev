import StyledHeader from "./StyledHeader";
import logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="infakt-logo" />
    </StyledHeader>
  );
};

export default Header;
