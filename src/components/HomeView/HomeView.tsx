import { Link } from "react-router-dom";
import Button from "../Button/Button";
import StyledHomeView from "./StyledHomeView";
import { routes } from "../../routes";

const HomeView: React.FC = () => {
  return (
    <StyledHomeView>
      <Link to={routes.accountants}>
        <Button>Zobacz naszych księgowych</Button>
      </Link>
    </StyledHomeView>
  );
};

export default HomeView;
