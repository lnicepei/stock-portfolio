import { Button } from "../../App/style";
import { StyledCoin, StyledLink } from "./style";

type Props = {
  coin: APICoin;
  handleBuyMenuOpen: (e: React.SyntheticEvent) => void;
  handleCoinMenuOpen: (e: React.SyntheticEvent) => void;
};

const Coin: React.FC<Props> = ({
  coin,
  handleBuyMenuOpen,
  handleCoinMenuOpen,
}) => {
  return (
    <StyledCoin>
      <div>
        {coin.rank}.{" "}
        <StyledLink onClick={handleCoinMenuOpen}>{coin.name}</StyledLink>
      </div>
      <div>
        {Number(coin.priceUsd).toFixed(2)}$
        <Button onClick={handleBuyMenuOpen}>Buy</Button>
      </div>
    </StyledCoin>
  );
};

export default Coin;
