import { Card } from "../../../App/App.styles";

const Coin = ({ coin, handleBuyMenuOpen, handleCoinMenuOpen }) => {
  return (
    <Card onClick={handleCoinMenuOpen}>
      <button onClick={handleBuyMenuOpen}>Buy</button>
      {coin.rank}, {coin.name}, {coin.price}, {coin.symbol}
    </Card>
  );
};

export default Coin;
