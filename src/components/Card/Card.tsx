import { AccountantType } from "../../types/Accountant";
import Button from "../Button/Button";
import StyledCard from "./StyledCard";

const Card: React.FC<ICardProps> = ({ data }: ICardProps) => {
  const title = data.gender === "female" ? "Twoja księgowa" : "Twój księgowy";
  const getFullName = () => {
    return `${data.name.first} ${data.name.last}`;
  };

  return (
    <StyledCard>
      <div className="card-header">
        <div className="img-wrapper">
          <img src={data.picture.medium} alt="" />
        </div>
        <div className="name-wrapper">
          <p className="title">{title}</p>
          <p className="name">{getFullName()}</p>
        </div>
      </div>

      <div className="card-content">
        <div>
          <p className="info-type">E-mail</p>
          <p className="info email">{data.email}</p>
        </div>
        <div>
          <p className="info-type">Telefon</p>
          <p className="info">{data.cell}</p>
        </div>
        <div>
          <p className="info-type">Średnia cena netto usługi / m-c</p>
          <p className="info">
            350,00 <span className="currency">PLN</span>
          </p>
        </div>

        <Button className="more-btn">Dowiedz się więcej</Button>
      </div>
    </StyledCard>
  );
};

interface ICardProps {
  data: AccountantType;
}

export default Card;
