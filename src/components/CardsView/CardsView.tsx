import { useEffect, useState } from "react";
import Button from "../Button/Button";
import StyledCardsView from "./StyledCardsView";
import { fetchAccountants } from "../../api/fetchAccountants";
import StyledCardsGrid from "./StyledCardsGrid";
import Card from "../Card/Card";
import { AccountantType } from "../../types/Accountant";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const CardsView: React.FC = () => {
  const [data, setData] = useState<AccountantType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState<number>(2);

  const getAccountants = (page?: number) =>
    fetchAccountants(page)
      .then((res) => {
        setData((prevData) => prevData.concat(res.data.results));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

  useEffect(() => {
    getAccountants();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setLoading(true);
    getAccountants(nextPage);
    setNextPage((prevPage) => prevPage + 1);
  };

  if (error) {
    return <div>Problem z pobraniem danych.</div>;
  }

  return (
    <StyledCardsView>
      <Link to={routes.home}>
        <p className="go-back">
          <span className="arrow-left"></span>powrót
        </p>
      </Link>
      <StyledCardsGrid>
        {data && data.map((element, i) => <Card key={i} data={element} />)}
      </StyledCardsGrid>
      <Button
        onClick={handleClick}
        loading={loading}
        disabled={loading}
        className="get-more-btn"
      >
        Załaduj więcej
      </Button>
    </StyledCardsView>
  );
};

export default CardsView;
